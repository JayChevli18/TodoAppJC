const express=require("express");
const dotenv=require("dotenv");
const connectdb=require("./config/dbConfig");

dotenv.config();

connectdb();

const app=express();

app.use(express.json());

module.exports=app;

