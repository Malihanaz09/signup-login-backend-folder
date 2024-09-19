import { Router } from "express";
import get from "./controller/get.js"
import post from "./controller/post.js" 
import SignUp from "./controller/signup.js";
import SignUpValidation from "./middleware/signupAuth.js";
import loginValidation from "./middleware/loginAuth.js";
import LogIn from "./controller/login.js";
const router = Router()

router.get("/" , get)
router.post("/" , post)

router.post("/signup",SignUpValidation, SignUp )
router.post("/login",loginValidation, LogIn )

export default router;