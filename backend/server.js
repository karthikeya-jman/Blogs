const express = require("express")
const app  = express()
const mongoose = require("mongoose")
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors")
require("dotenv").config()

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("mongodb connected"))
.catch((e)=>console.log("eroor during connecting to mongodb",e))

app.use("/api",blogRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`connected to ${process.env.PORT}`);

})