import React, { useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {useImmer} from "use-immer"
import {toast} from "react-toastify"


import { Link, useNavigate, useParams } from "react-router-dom";

import {Contact as ContactType, ContactContext} from "../../context/contactContext"
import {
  getContact,
  updateContact,
} from "../../services/contactService";
import { Spinner } from "..";
import { COMMENT, ORANGE, PURPLE } from "../../helpers/colors";
import { contactSchema } from "../../validations/contactValidation";

const EditContact:React.FC = () => {
  const { contactId } = useParams<string>();
  const navigate = useNavigate();
  const { loading, setLoading, groups, setContacts, setFilteredContacts } = useContext(ContactContext)


  const [contact, setContact] = useImmer<ContactType>({
    fullName:'',
    photo:'',
    mobile:0,
    email:'',
    job:'',
    group:'',
    _id:''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactData } = await getContact(contactId);
        setLoading(false)
        setContact(contactData)
      } catch (err:any) {
        console.log(err.message);
        setLoading(false)
      }
    };

    fetchData().then();
  },[]);

  const submitForm = async (values:ContactType) => {
    try {
      setLoading(true);
      const { data, status } = await updateContact(values, contactId);

      if (status === 200) {
        setLoading(false);

        toast.info('مخاطب با موفقیت ویرایش شد',{icon:'✍️'})

        setContacts((draft: ContactType[])=>{
          const contactIndex=draft.findIndex(c=>{
            if (c._id && contactId){
            return c._id===contactId
            }
          })
          draft[contactIndex] ={...data}
        })
        setFilteredContacts((draft:ContactType[])=>{
          const contactIndex=draft.findIndex(c=>{
            if (c._id && contactId){
            return c._id===contactId
          }
          })
          draft[contactIndex] ={...data}
        })

        navigate("/contacts");
      }
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <div className="container">
              <div className="row my-2">
                <div className="col text-center">
                  <p className="h4 fw-bold" style={{ color: ORANGE }}>
                    ویرایش مخاطب
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: ORANGE }} />
              <div
                className="row p-2 w-75 mx-auto align-items-center"
                style={{ backgroundColor: "#44475a", borderRadius: "1em" }}
              >
                <div className="col-md-8">
                <Formik initialValues={contact}
                    validationSchema={contactSchema}
                    onSubmit={(values:ContactType) => {
                      submitForm({
                        fullName: values.fullName,
                        photo: values.photo,
                        mobile: +values.mobile,
                        email: values.email,
                        job: values.job,
                        group: values.group
                      }).then()
                    }}>
                    <Form>
                      <div className="mb-2">
                        <Field
                          name="fullName"
                          type="text"
                          className="form-control"
                          placeholder="نام و نام خانوادگی"
                        />
                        <ErrorMessage name="fullName" render={msg=> <div className="text-danger">{msg}</div>} />
                      </div>
                      <div className="mb-2">
                        <Field
                          name="photo"
                          type="text"
                          className="form-control"
                          placeholder="آدرس تصویر"
                        />
                        <ErrorMessage name="photo" render={msg=> <div className="text-danger">{msg}</div>}/>

                      </div>
                      <div className="mb-2">
                        <Field
                          name="mobile"
                          type="number"
                          className="form-control"
                          placeholder="شماره موبایل"
                        />
                        <ErrorMessage name="mobile" render={msg=> <div className="text-danger">{msg}</div>}/>
                      </div>
                      <div className="mb-2">
                        <Field
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="آدرس ایمیل"
                        />
                        <ErrorMessage name="email" render={msg=> <div className="text-danger">{msg}</div>}/>
                      </div>
                      <div className="mb-2">
                        <Field
                          name="job"
                          type="text"
                          className="form-control"
                          placeholder="شغل"
                        />
                        <ErrorMessage name="job" render={msg=> <div className="text-danger">{msg}</div>}/>
                      </div>
                      <div className="mb-2">
                        <Field
                          name="group"
                          as='select'
                          className="form-control"
                        >

                          <option value="">انتخاب گروه</option>
                          {groups.length > 0 &&
                            groups.map((group) => (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage name='group' render={msg=> <div className="text-danger">{msg}</div>}/>
                      </div>
                      <div className="mx-2">
                        <input
                          type="submit"
                          className="btn"
                          style={{ backgroundColor: PURPLE }}
                          value="ویرایش مخاطب"
                        />
                        <Link
                          to={"/contacts"}
                          className="btn mx-2"
                          style={{ backgroundColor: COMMENT }}
                        >
                          انصراف
                        </Link>
                      </div>
                    </Form>

                  </Formik>
                </div>
                <div className="col-md-4">
                  <img
                    src={contact.photo}
                    className="img-fluid rounded"
                    style={{ border: `1px solid ${PURPLE}` }}
                    alt={contact.photo}
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-1">
              <img
                src={require("../../assets/man-taking-note.png")}
                height="300px"
                style={{ opacity: "60%" }}
                alt='notFound'
              />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EditContact;
