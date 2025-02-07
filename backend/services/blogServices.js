const Blog = require("../models/Blog")

const getAllBlogs = async () =>{
    try {

        const blogs = await Blog.find()
        return users;
        
    } catch (error) {
        console.log("error while getting all blogs"+error.message);
        
    }
}

const createNewBlog = async(blogDetails) =>{
    try {
        const newBlog = new Blog(blogDetails);
        await newBlog.save()
        return newBlog
    } catch (error) {
        console.log("error while creating blog"+error.message);

    }
}

module.exports = {
    getAllBlogs,
    createNewBlog

}