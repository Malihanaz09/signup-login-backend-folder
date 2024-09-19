import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const  LogIn = async (req, res)=>{
    try{
         const {email , password} = req.body
         const User = await UserModel.findOne({ email });
         const errMesg = "Äuthentication failed! email or password is wrong"
         if (!User){
            return res.status(403)
            .json({ message : errMesg , success: false})
         }
        const isPassEqual = await bcrypt.compare(password, User.password);
        if(!isPassEqual){
            return res.status(403)
            .json({ message : errMesg , success: false})
        }
        const jwtToken = jwt.sign(
            {email: User.email , _id: User._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        )

         res.status(200)
         .json({
            message : "LogIn  Successfully",
            success : true,
            jwtToken,
            email,
            name: User.name
         })
    }catch(err){
        res.status(500).json({ 
            status : 500 ,
            message :"internal error",
            success: false
        })
    }
}

export default LogIn;