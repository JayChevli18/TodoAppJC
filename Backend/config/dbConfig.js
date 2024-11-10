const moongose=require("mongoose");
const connect=async()=>{
    try{
        await moongose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongo DB Connected Successfully!!");
    }
    catch(err){
        console.error("Mongo DB connection failed!", error);
    }
};

module.exports=connect;