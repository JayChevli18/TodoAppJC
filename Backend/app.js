const express = require("express");
const dotenv = require("dotenv");
const connectdb = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");
dotenv.config();

connectdb();

const app = express();

app.use(cors({
    // origin: 'http://localhost:3000',
    origin: 'https://todo-app-jc-frontend.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", todoRoutes);
app.get('/x', (req, res) => {
    res.json("ok");
})
app.get('/', (req, res) => {
    res.json("Hello");
})

app.post('/api/user', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const token = email;
        res.status(201).json({ success: true, token });
    }
    catch (err) {
        res.status(400).json({ success: false, error: err.message })
    }
})

module.exports = app;


