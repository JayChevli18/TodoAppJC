const jwt=require("jsonwebtoken");
const User=require("../model/userModel");

exports.protect=async(req, res, next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1];
    }
    if(!token){
        return res.status(401).json({message:"Not Authorized, No Token!"});
    }

    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        req.user=await User.findById(decoded.id);
        next();
    }
    catch(err){
        res.status(401).json({message:"Token Failed, Authorization Denied!"});
    }
};
