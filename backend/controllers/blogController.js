const blogServices = require("../services/blogServices")

exports.getblogs = async (req,res)=>{
    try {

        const blogs = await blogServices.getAllBlogs()
        res.status(200).json(blogs)
        
    } catch (error) {
        res.status(500).json({message : "error fetching blogs" + error.message})
    }
}

exports.createBlog = async(req,res) =>{
    try {
        const blogDetails = req.body;
        const newBlog = await blogServices.createNewBlog(blogDetails)
        res.status(201).json(newBlog)
        
    } catch (error) {
        res.status(500).json({message : "error creating blogs" + error.message})

        
    }
}