// import { required } from "joi";
import { Schema } from "mongoose";
import mongoose from "mongoose";

const dataSchema = new Schema({
    // firstname:{
    //     type: mongoose.Schema.Types.String,
    //     required: true
    // },
    // lastname:{
    //     type: mongoose.Schema.Types.String,
    //     required: true
    // },
    name:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    email:{
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    password:{
        type: mongoose.Schema.Types.String,
        required: true
    }

})

const UserModel = mongoose.model("user" , dataSchema);

export default UserModel;