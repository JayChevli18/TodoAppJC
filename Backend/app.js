const express=require("express");
const dotenv=require("dotenv");
const connectdb=require("./config/dbConfig");
const authRoutes=require("./routes/authRoutes");


dotenv.config();

connectdb();

const app=express();

app.use(express.json());
app.use("/api/auth", authRoutes);
module.exports=app;

