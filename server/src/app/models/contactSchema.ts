import mongoose, {Schema} from "mongoose";

interface ContactSchema{
    fullName: string;
    job:string
    mobile:string
    photo:string
    email:string
    group:string
}

const schema=new Schema<ContactSchema>({
    fullName:String,
    job:String,
    mobile:String,
    photo:String,
    email:String,
    group:String
})

const contactsModel=mongoose.model<ContactSchema>('contacts',schema)

export default contactsModel