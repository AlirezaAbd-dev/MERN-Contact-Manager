import {RequestHandler} from "express";
import {groupModel} from "../models/groups";

export const getGroupsList: RequestHandler = async (req, res) => {
    let groups = await groupModel.find()

    if (groups.length > 0) {
        return res.status(200).send(groups[0].groups);
    }

    const addGroups = await new groupModel({
        groups: [
            {
                id: "1",
                name: 'همکار'
            },
            {
                id: "2",
                name: 'دوست'
            },
            {
                id: "3",
                name: 'فامیل'
            },
            {
                id: "4",
                name: 'سرویس'
            },
            {
                id: "5",
                name: 'آشنا'
            }
        ]
    })
    await addGroups.save()
    return res.status(200).send(addGroups.groups)
}
interface Group{
    id: string
    name:string
}

export const getOneGroup:RequestHandler=async (req, res)=>{
    const id = req.params.id

    const group=await groupModel.find()

    const result=group[0].groups.filter((group:Group) => group.id === id)
    if (result.length ===0) return res.status(404).send({message:'گروه مورد نظر یافت نشد!'})

    return res.status(200).send(result)
}