const express = require("express");
const dotenv = require("dotenv");
const connectdb = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());


const db=async ()=>{
    try{
        await connectdb();
        return "DB Connected";
    }
    catch(err){
        console.error(err.message);
    }
}
db();

app.use(cors({
    // origin: 'http://localhost:3000',
    origin: 'https://todo-app-jc-frontend.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));
app.use("/api/auth", authRoutes);
app.use("/api", todoRoutes);
app.get('/db', async(req,res)=>{
    try{
        const dbx=await db();
        console.log("c", dbx);
        res.json({success:true, message:"DB Connected!"});

    }
    catch(err){
        res.json({success:false, message:err.message});
    }
});
app.get('/x', (req, res) => {
    res.json("ok");
})
app.get('/', (req, res) => {
    res.json("Hello");
})

app.post('/api/user', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user=await User.create({name, email, password});
        console.log(name, email, password);
        const token = email;
        res.status(201).json({ success: true, token });
    }
    catch (err) {
        res.status(400).json({ success: false, error: err.message })
    }
})

module.exports = app;


