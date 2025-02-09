import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import { CiSearch } from 'react-icons/ci';
import BlogCardXL from './components/BlogCardXL';
import BlogCardLG from './components/BlogCardLG';
import CreateForm from './components/CreateForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editBlog, setEditBlog] = useState(null); // Track editing blog
  

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get('http://localhost:3000/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  };

  const handleToggleForm = () => {

    setShowForm(!showForm);
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog._id !== id));
  };

  const handleEditBlog = (blog) => {
    setEditBlog(blog);
    setShowForm(true); // Open form in edit mode
  }

  return (
    <>
      {showForm && (
        <div className='absolute fixed w-full h-screen bg-black/[70%] z-1 place-content-center'>
          <CreateForm 
            onToggleForm={handleToggleForm} 
            initialData={editBlog} 
            onSubmit={handleEditBlog} 
            updateBlogs={fetchBlogs} 
          />
        </div>
      )}

      <NavBar onToggleForm={handleToggleForm} />

      <div className='w-full flex justify-center mt-10 mb-20 relative'>
        <p className='absolute text-white font-bold text-5xl top-[80px]'>Blogs</p>
        <div className='flex items-center gap-3 px-9 py-3 bg-white absolute -bottom-[20px] shadow-lg rounded-lg'>
          <CiSearch className='text-2xl' />
          <input
            type='text'
            className='text-lg'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <img src='header_bg.png' alt='' className='rounded-4xl h-[230px] w-[80%] object-cover' />
      </div>

      <BlogCardXL />
      <div className='flex flex-wrap place-content-center gap-20 my-20'>
        {blogs.filter(blog => searchQuery === '' || blog.title.toLowerCase().includes(searchQuery.toLowerCase())).map((blog) => (

          <BlogCardLG key={blog._id} blog={blog} onDelete={handleDeleteBlog} onEdit={handleEditBlog} />
        ))}
      </div>
    </>
  );
}

export default App;
