const User=require("../model/userModel");
const jwt=require("jsonwebtoken");

const generateToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRED_IN});
}

exports.signup=async(req, res)=>{
    try{
        const {name, email, password}=req.body;
        const user=await User.create({name, email, password});
//        console.log(user);
        const token=generateToken(user._id);
        res.status(201).json({success:true, token});
    }
    catch(err){
        res.status(400).json({success:false, error:err.message})
    }
}
