import UserModel from "../models/user.js";
import bcrypt from "bcrypt";

const  SignUp = async (req, res)=>{
    try{
         const { name, email , password} = req.body
         const User = await UserModel.findOne({ email });
         if (User){
            return res.status(409)
            .json({ message : "User can already exist, you can login", success: false})
         }
         const userModel = new UserModel({ name, email , password});
         userModel.password = await bcrypt.hash(password, 10);
         await userModel.save();
         res.status(201)
         .json({
            message : "SignUp Successfully",
            success : true
         })
    }catch(err){
        res.status(500).json({ 
            status : 500 ,
            message :"internal error",
            success: false
        })
    }
}

export default SignUp
