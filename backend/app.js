const express = require("express")
const app  = expres()
const cors = require("cors")
const blogRoutes = require("./routes/blogRoutes")
require("dotenv").config()

app.use(express.json())

app.use("/api/blogs",blogRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`connected to ${process.env.port}`);
    
})