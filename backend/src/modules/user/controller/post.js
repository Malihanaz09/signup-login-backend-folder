import User from "../models/user.js";
import  postData from "../services/post.js";

const  post = async (req, res)=>{
    try{
         const userData =(req.body);
         console.log("request body", userData)
        //  const newUser = new User({firstName, lastName, email , passworrd})
        // await newUser.save()   
         res.status(200).send({ status : 200 , message: "Add user", userData })
    }catch(err){
        res.status(500).send({ status : 500 , message :"internal error"})
    }
}

// const post=('/users', async (req, res) => {
//     try {
//       const { firstName, lastName, email } = req.body;
  
//       if (!firstName) {
//         return res.status(400).send({ error: 'First name is required' });
//       }
  
//       const newUser = new User({ firstName, lastName, email });
//       await newUser.save();
//       res.status(201).send(newUser);
//       console.log(newUser)
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   });


export default post;