const express = require("express");
require('dotenv').config();
const app=express();
const cors= require("cors");
const port=5000;
const db = require("./utils/bd");
const router = require("./router/auth-rout");
const contect = require("./router/contect-rout");
const adminrout = require("./router/auth-contectdash.jsx");
const corsOption ={
    origin:"http://localhost:5173",
    methods:"POST,GET,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form",contect);
app.use("/api/admin",adminrout);
app.listen(port,()=>{
    console.log(`Connected to port number: ${port}`)
});