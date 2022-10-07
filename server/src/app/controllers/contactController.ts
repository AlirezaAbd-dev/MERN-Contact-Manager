import { RequestHandler } from "express";

import contactsModel from "../models/contactSchema";
import { editContactsValidator } from "../validators/contactsValidator";

export const getContacts: RequestHandler = async (req, res) => {
  const contacts = await contactsModel.find();
  return res.status(200).json(contacts);
};

export const editContact: RequestHandler = async (req, res) => {
  const id: string = req.params.id;

  contactsModel
    .findOne({ _id: id })
    .then(async (contact) => {
      const { error } = editContactsValidator(req.body);
      if (error)
        res.status(400).send({ message: "لطفا تمام فیلد ها را پر کنید!" });

      if (contact) {
        contact.fullName = req.body.fullName;
        contact.email = req.body.email;
        contact.photo = req.body.photo;
        contact.mobile = req.body.mobile;
        contact.group = req.body.group;
        contact.job = req.body.job;

        await contact.save();

        return res.status(200).send(contact);
      }
    })
    .catch((_err) => {
      return res.status(404).send({ message: "مخاطب مورد نظر یافت نشد!" });
    });
};

export const addContact: RequestHandler = async (req, res) => {
  const { error } = editContactsValidator(req.body);
  if (error)
    return res.status(400).send({ message: "لطفا تمام فیلد ها را پر کنید!" });
  let { fullName } = req.body;

  let contact = await contactsModel.findOne({ fullName: fullName });
  if (contact)
    return res.status(400).send({ message: "این نام کاربری در دسترس نیست!" });

  const result = await new contactsModel(req.body);
  await result.save();
  return res.status(200).send(result);
};

export const deleteContact: RequestHandler = async (req, res) => {
  const id: string = req.params.id;

  contactsModel
    .findOne({ _id: id })
    .then(async (contact) => {
      if (contact) {
        await contact.remove();
      }
      return res.status(200).send({ message: "مخاطب با موفقیت حذف شد!" });
    })
    .catch((err: Error) => {
      console.log(err.stack);
    });
};

export const getOneContact: RequestHandler = async (req, res) => {
  const id: string = req.params.id;

  let contact = await contactsModel.findById(id);
  if (!contact)
    return res.status(404).send({ message: "مخاطب مورد نظر یافت نشد!" });

  return res.status(200).send(contact);
};
