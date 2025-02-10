const mongoose = require('mongoose');
const Blog = require('./models/Blog'); 
require("dotenv").config()

const seedBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    
    const blogs = [
      {
        title: 'How to Learn JavaScript',
        content: 'JavaScript is a versatile language used for both front-end and back-end development .',
        imageUrl: 'https://codeandhack.com/wp-content/uploads/2020/11/JavaScript-programming-language.jpg',
        genre: 'Technology',
        comments: [
          { commentText: 'Great article!', createdAt: new Date() },
          { commentText: 'Thanks for the tips.', createdAt: new Date() }
        ],
        likes: 10,
        views: 100
      },
      {
        title: 'Best Practices for Node.js',
        content: 'Node.js is a runtime environment for executing JavaScript on the server side.',
        imageUrl: 'https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png',
        genre: 'Technology',
        comments: [
          { commentText: 'Helpful tips, thanks!', createdAt: new Date() }
        ],
        likes: 5,
        views: 50
      }
    ];

    await Blog.insertMany(blogs);
    console.log('Seeder completed, blogs inserted!');
  } catch (error) {
    console.error('Seeder failed:', error);
  } finally {
    mongoose.disconnect();  
  }
};

seedBlogs();  