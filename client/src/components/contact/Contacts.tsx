import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

import { ContactContext } from "../../context/contactContext"

import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors"
import Spinner from "../Spinner"
import Contact from "./Contact"

const Contacts:React.FC = () => {

    const { filteredContacts, loading, deleteContact } = useContext(ContactContext)

    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 float-end">
                                <Link to='add' className="btn my-2" style={{ backgroundColor: PINK }}>
                                    ساخت مخاطب جدید
                                    <span className="fa fa-plus-circle mx-2"></span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> :
                    (
                        <section className="container">
                            <div className="row">
                                {
                                    filteredContacts.length > 0 ? filteredContacts.map(c => (
                                        <Contact key={c._id} contact={c}
                                            deleteContact={() => {
                                                if (c._id){
                                                deleteContact(c._id, c.fullName)
                                                }
                                            }} />
                                    )) :
                                        (
                                            <div className="text-center py-5" style={{ backgroundColor: CURRENTLINE }}>
                                                <p className="h3" style={{ color: ORANGE }}>
                                                    مخاطب یافت نشد...
                                                </p>
                                                <img src={require("../../assets/no-found.gif")} alt="پیدا نشد" className="w-25" />
                                            </div>
                                        )
                                }
                            </div>
                        </section>
                    )
            }

        </>
    )
}

export default Contacts