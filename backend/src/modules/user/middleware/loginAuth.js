import joi from "joi";

const loginValidation = (req,res,next)=>{
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    })
    const {error} = Schema.validate(req.body);
    if (error){
        return res.status(400)
        .json({message: "Bad request", error})
    }
    next()
}
 

export default loginValidation;