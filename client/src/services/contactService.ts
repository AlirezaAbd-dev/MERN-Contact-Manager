import axios from 'axios';
import { Contact } from '../context/contactContext';

const SERVER_URL:string = 'http://localhost:3000/api';

// @desc Get All Contacts
// @route GET http://localhost:3000/api/getContacts
export const getAllContacts=()=>{
    const url= `${SERVER_URL}/getContacts`;
    return axios.get(url);
}

// @desc Get Contact With Contact ID
// @route GET http://localhost:3000/api/getContact/:contactId
export const getContact=(contactId:string|undefined) =>{
const url= `${SERVER_URL}/getContact/${contactId}`
return axios.get(url);
}

// @desc Get All Groups
// @route GET http://localhost:3000/api/getGroupsList
export const getAllGroups=()=>{
    const url= `${SERVER_URL}/getGroupsList`
    return axios.get(url);
}

// @desc Get group With Contact ID
// @route GET http://localhost:3000/api/getGroup/:groupId
export const getGroup=(groupId:string)=>{
    const url= `${SERVER_URL}/getGroup/${groupId}`
    return axios.get(url);
}

// @desc Post New Contact
// @route POST http://localhost:3000/addContact
export const createContact=(contact:Contact)=>{
const url= `${SERVER_URL}/addContact`
return axios.post(url,contact);
}

// @desc Put Contact With Contact ID
// @route PUT http://localhost:3000/getContact/:contactId
export const updateContact=(contact:Contact,contactId:string|undefined)=>{
    const url= `${SERVER_URL}/editContact/${contactId}`
    return axios.put(url,contact)
}

// @desc Delete Contact With Contact ID
// @route DELETE http://localhost:3000/deleteContact/:contactId
export const deleteContact=(contactId:string)=>{
    const url= `${SERVER_URL}/deleteContact/${contactId}`
    return axios.delete(url);
}