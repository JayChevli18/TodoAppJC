const express=require("express");
const dotenv=require("dotenv");
const connectdb=require("./config/dbConfig");
const authRoutes=require("./routes/authRoutes");
const todoRoutes=require("./routes/todoRoutes");
const cors=require("cors");
dotenv.config();

connectdb();

const app=express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", todoRoutes);
app.get('/', (req, res)=>{
    res.json("Hello");
})

module.exports=app;


