import {useState, useEffect, useContext} from "react";

import {Link, useParams} from "react-router-dom";

import {Contact, ContactContext, Groups} from "../../context/contactContext";
import {getContact, getGroup} from "../../services/contactService";
import {Spinner} from "..";
import {CURRENTLINE, CYAN, PURPLE} from "../../helpers/colors";

interface State {
    contact: Contact
    group: Groups[]
}

const ViewContact = () => {
    const {contactId} = useParams<string>();

    const [state, setState] = useState<State>({
        contact: {
            fullName: '',
            photo: '',
            job: '',
            mobile: 0,
            email: '',
            group: '',
            _id: ''
        },
        group: [{
            id: '',
            name: ''
        }]
    });

    const {loading, setLoading} = useContext(ContactContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {data: contactData} = await getContact(contactId)
                const {data: groupData} = await getGroup(contactData.group);

                setState({
                    ...state,
                    contact: contactData,
                    group: groupData,
                })
                setLoading(false);
            } catch (err: any) {
                console.log(err.message);
                setLoading(false)
            }
        };

        fetchData().then();
    }, [])

    const {contact, group} = state;

    return (
        <>
            <section className="view-contact-intro p3">
                <div className="container">
                    <div className="row my-2 text-center">
                        <p className="h3 fw-bold" style={{color: CYAN}}>
                            اطلاعات مخاطب
                        </p>
                    </div>
                </div>
            </section>

            <hr style={{backgroundColor: CYAN}}/>

            {loading ? (
                <Spinner/>
            ) : (
                <>
                    {Object.keys(contact).length > 0 && (
                        <section className="view-contact mt-e">
                            <div
                                className="container p-2"
                                style={{borderRadius: "1em", backgroundColor: CURRENTLINE}}
                            >
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <img
                                            src={contact.photo}
                                            alt=""
                                            className="img-fluid rounded"
                                            style={{border: `1px solid ${PURPLE}`}}
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-dark">
                                                نام و نام خانوادگی :{" "}
                                                <span className="fw-bold">{contact.fullName}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                شماره موبایل :{" "}
                                                <span className="fw-bold">{contact.mobile}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                ایمیل : <span className="fw-bold">{contact.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                شغل : <span className="fw-bold">{contact.job}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                گروه : <span className="fw-bold">{group[0].name}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <Link
                                            to={"/contacts"}
                                            className="btn"
                                            style={{backgroundColor: PURPLE}}
                                        >
                                            برگشت به صفحه اصلی
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </>
            )}
        </>
    );
};

export default ViewContact;
