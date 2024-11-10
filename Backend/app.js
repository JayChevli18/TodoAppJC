const express=require("express");
const dotenv=require("dotenv");
const connectdb=require("./config/dbConfig");
const authRoutes=require("./routes/authRoutes");
const todoRoutes=require("./routes/todoRoutes");

dotenv.config();

connectdb();

const app=express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", todoRoutes);


module.exports=app;


