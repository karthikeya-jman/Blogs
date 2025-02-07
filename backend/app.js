const express = require("express")
const app  = express()
exports.app = app
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("mongodb connected"))
.catch(()=>console.log("eroor during connecting to mongodb"))

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`connected to ${process.env.port}`);
    
})