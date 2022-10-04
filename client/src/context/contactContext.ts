import { createContext } from "react";

interface Context {
  loading: boolean;
  setLoading: (status: boolean) => void;
  setContacts: (arg:any)=>void;
  filteredContacts: Contact[];
  setFilteredContacts:(arg:any) => void;
  contacts: Contact[];
  groups: Groups[];
  deleteContact: (contactId:string,contactFullname:string) => void;
  createContact: (value:Contact) => void;
  contactSearch: (query:any) => void;
}

export interface Groups {
  id: string|number;
  name:string
}

export interface Contact{
  fullName:string,
  photo:string,
  mobile:string,
  email:string,
  job:string,
  group:string,
  _id?:string
}

export const ContactContext = createContext<Context>({
  loading: false,
  setLoading: () => {},
  setContacts: () => {},
  filteredContacts: [],
  setFilteredContacts: () => {},
  contacts: [],
  groups: [],
  deleteContact: () => {},
  createContact: () => {},
  contactSearch: () => {},
});
