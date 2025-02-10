const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true }, 
  genre: { type: String, required: true }, 
  comments: [
    {
      commentText: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
}, { timestamps: true }); 

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

