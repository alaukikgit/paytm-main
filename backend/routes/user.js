const express = require("express");
const zod = require("zod");
const JWT_SECRET = require("./config");
const router = express.Router();

const signupSchema = zd.object({
    username: zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    password:zod.string()
})
router.post("/signup",async(req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.join({
            message:"Email already taken/Incorrect inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if(user._id){
        return res.join({
            message:"Email already taken/Incorrect inputs"
        })
    }

    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId: dbUser._id
    },JWT_SECRET);

    res.join({
        message: "User created successfully",
        token: token

    })

}) 
   
module.exports = router;
// /api