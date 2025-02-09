const Blog = require("../models/Blog");

// ✅ Fetch all blogs
const getAllBlogs = async () => {
  try {
    return await Blog.find();
  } catch (error) {
    throw new Error("Error fetching blogs: " + error.message);
  }
};

// ✅ Fetch blog by ID
const getBlogById = async (id) => {
  try {
    return await Blog.findById(id);
  } catch (error) {
    throw new Error("Blog not found");
  }
};

// ✅ Search blogs by title or content
const searchBlogs = async (query) => {
  try {
    return await Blog.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
      ],
    });
  } catch (error) {
    throw new Error("Error searching blogs");
  }
};

// ✅ Filter blogs by genre
const filterBlogsByGenre = async (genre) => {
  try {
    return await Blog.find({ genre });
  } catch (error) {
    throw new Error("Error filtering blogs");
  }
};

// ✅ Create a new blog
const createNewBlog = async (blogDetails) => {
  try {
    const newBlog = new Blog(blogDetails);
    console.log(blogDetails);
    
    return await newBlog.save();
  } catch (error) {
    throw new Error("Error creating blog: " + error.message);
  }
};

// ✅ Update a blog
const updateBlog = async (id, updatedData) => {
  try {
    return await Blog.findByIdAndUpdate(id, updatedData, { new: true });
  } catch (error) {
    throw new Error("Error updating blog");
  }
};

// ✅ Like a blog
const likeBlog = async (id) => {
  try {
    return await Blog.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
  } catch (error) {
    throw new Error("Error liking blog");
  }
};

// ✅ Increase blog views
const increaseViews = async (id) => {
  try {
    return await Blog.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true });
  } catch (error) {
    throw new Error("Error increasing views");
  }
};

// ✅ Add a comment to a blog
const addComment = async (id, commentText) => {
  try {
    return await Blog.findByIdAndUpdate(
      id,
      { $push: { comments: { commentText } } },
      { new: true }
    );
  } catch (error) {
    throw new Error("Error adding comment");
  }
};

const deleteBlog = async (id) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new Error("Blog not found");
  }
  await Blog.findByIdAndDelete(id);
};

module.exports = {
  getAllBlogs,
  getBlogById,
  searchBlogs,
  filterBlogsByGenre,
  createNewBlog,
  updateBlog,
  likeBlog,
  increaseViews,
  addComment,
  deleteBlog, // ✅ Export delete function
};
