import { Router } from "express";
import {addContact, deleteContact, editContact, getContacts, getOneContact} from "../controllers/contactController";
import {getGroupsList, getOneGroup} from "../controllers/groupsController";

const router = Router();

// API Routes for Contacts
router.get('/getContacts',getContacts)
router.get('/getContact/:id',getOneContact)
router.put('/editContact/:id',editContact)
router.post('/addContact',addContact)
router.delete('/deleteContact/:id',deleteContact);

// API Routes for Groups
router.get('/getGroupsList',getGroupsList)
router.get('/getGroup/:id',getOneGroup)

export default router