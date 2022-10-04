import { FC, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import { useImmer } from 'use-immer'
import { ToastContainer, toast } from 'react-toastify';

import { debounce } from 'lodash'

import { Contact, ContactContext, Groups } from './context/contactContext'
import { AddContact, EditContact, Contacts, Navbar, ViewContact } from "./components"

import { createContact, getAllContacts, getAllGroups, deleteContact } from './services/contactService'


import './App.css';
import { COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW } from './helpers/colors'

const App: FC = () => {

    const [loading, setLoading] = useImmer<boolean>(false)
    const [contacts, setContacts] = useImmer<Contact[]>([])
    const [filteredContacts, setFilteredContacts] = useImmer<Contact[]>([])
    const [groups, setGroups] = useImmer<Groups[]>([])

    const navigate = useNavigate()

    //get data from JSON-server by axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data: contactsData } = await getAllContacts()
                const { data: groupsData } = await getAllGroups()

                setContacts(contactsData)
                setFilteredContacts(contactsData)
                setGroups(groupsData)
                setLoading(false)

            } catch (err: any) {
                console.log(err.message);
                setLoading(false)
            }
        }

        fetchData().then()
    }, [])

    const createContactForm = async (values: Contact) => {
        try {
            setLoading(draft => !draft)

            const { status, data } = await createContact(values)

            if (status === 200) {
                toast.success('مخاطب با موفقیت ساخته شد', { icon: '🥳' })
                setContacts(draft => {
                    draft.push(data)
                })

                setFilteredContacts(draft => {
                    draft.push(data)
                })

                setLoading(prevLoading => !prevLoading)
                navigate("/contacts")
            }
        } catch (err: any) {
            console.log(err.message);
            setLoading(prevLoading => !prevLoading)
        }
    }

    const confirmDelete = (contactId: string, contactFullName: string) => {
        confirmAlert({
            customUI({ onClose }) {
                return (
                    <div dir='rtl' style={{
                        backgroundColor: CURRENTLINE,
                        border: `1px solid ${PURPLE}`,
                        borderRadius: "1rem"
                    }}
                        className="p-4"
                    >
                        <h1 style={{ color: YELLOW }}>پاک کردن مخاطب</h1>
                        <p style={{ color: FOREGROUND }}>
                            مطمئنی که میخوای مخاطب {contactFullName} رو پاک کنی؟
                        </p>
                        <button onClick={() => {
                            removeContact(contactId).then(() => {
                                console.log("Remove operation confirmed.")
                            })
                            onClose()
                        }} className="btn mx-2"
                            style={{ backgroundColor: PURPLE }}>
                            مطمئن هستم
                        </button>
                        <button onClick={onClose} className="btn" style={{ backgroundColor: COMMENT }}>
                            انصراف
                        </button>
                    </div>
                )
            }
        })
    }


    const removeContact = async (contactId: string) => {
        const contactsBackup = [...contacts]
        try {
            setContacts(draft => draft.filter((c) => {
                if (c._id)
                    return c._id !== contactId
            }))
            setFilteredContacts(draft => draft.filter((c) => {
                if (c._id)
                    return c._id !== contactId
            }))

            deleteContact(contactId).then()
            toast.error('مخاطب با موفقیت پاک شد', { icon: '🗑️' })
        } catch (err: any) {
            setContacts(contactsBackup)
            setFilteredContacts(contactsBackup)
            console.log(err.message);
            setLoading(false)
        }
    }

    const contactSearch = debounce(query => {

        if (!query) return setFilteredContacts([...contacts])

        setFilteredContacts(draft => draft.filter(c => c.fullName.toLowerCase().includes(query.toLowerCase())))
    }, 1000)

    return (
        <ContactContext.Provider value={{
            loading,
            setLoading,
            setContacts,
            filteredContacts,
            setFilteredContacts,
            contacts,
            groups,
            deleteContact: confirmDelete,
            createContact: createContactForm,
            contactSearch,
        }}>
            <div className="App">
                <ToastContainer rtl={true} position="top-right" theme='colored' />
                <Navbar />
                <Routes>
                    <Route path='/' element={<Navigate to='/contacts' />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/contacts/add' element={<AddContact />} />
                    <Route path='/contacts/:contactId' element={<ViewContact />} />
                    <Route path='/contacts/edit/:contactId' element={<EditContact />} />
                </Routes>
            </div>
        </ContactContext.Provider>
    );
}

export default App;
