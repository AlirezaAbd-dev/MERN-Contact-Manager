import mongoose from "mongoose";

interface GroupsSchema{
    groups: {
        id: string
        name:string
    }[]
}

const schema = new mongoose.Schema<GroupsSchema>({
    groups:Array
})

export const groupModel = mongoose.model<GroupsSchema>('groups', schema);