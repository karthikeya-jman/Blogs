const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
    //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      commentText: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
