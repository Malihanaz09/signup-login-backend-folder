import UserModel from "../models/user.js";
// import User from "../models/use"

const getAll = async()=>{
    const users = await UserModel.find();
    return users;
}

const addData = (data)=>{
    new UserModel(data).save().then((user)=> user.toObject()); 
}

export{
    getAll, 
    addData
}