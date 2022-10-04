import * as Yup from "yup"

export const contactSchema = Yup.object().shape({
    fullName: Yup.string().required("نام و نام خانوادگی الزامی میباشد"),
    photo: Yup.string().url('ادرس معتبر نیست').required('تصویر مخاطب الزامی میباشد'),
    mobile: Yup.number().required('شماره موبایل الزامی میباشد'),
    email: Yup.string().email('آدرس ایمیل معتبر نیست').required('آدرس ایمیل الزامی میباشد'),
    job: Yup.string().nullable(),
    group: Yup.string().required('انتخاب گروه الزامی میباشد')
})