import Joi from "joi";

export interface Data {
    fullName: string,
    job: string,
    mobile: number,
    photo: string,
    email: string,
    group: string,
    _id?: string
}

export const editContactsValidator = (data: Data) => {
    const schema = Joi.object({
        fullName: Joi.string().required(),
        job: Joi.string().required(),
        mobile: Joi.number().required(),
        photo: Joi.string().required(),
        email: Joi.string().required(),
        group: Joi.string().required()
    })

    return schema.validate(data)
}