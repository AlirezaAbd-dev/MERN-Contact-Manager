import mongoose from "mongoose";

const schema = new mongoose.Schema({
    groups:Array
})

export const groupModel = mongoose.model('groups', schema);