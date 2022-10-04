import mongoose, {Schema} from "mongoose";

const schema=new Schema({
    fullName:String,
    job:String,
    mobile:String,
    photo:String,
    email:String,
    group:String
})

const contactsModel=mongoose.model('contacts',schema)

export default contactsModel