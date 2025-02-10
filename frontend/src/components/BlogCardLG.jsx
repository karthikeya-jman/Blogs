import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RxEyeOpen } from "react-icons/rx";
import { GoHeart } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { Link } from 'react-router-dom'; 

const BlogCardLG = ({ blog ,onDelete,onEdit }) => {

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:3000/api/blogs/${blog._id}`); 
        onDelete(blog._id); 
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };


  return (
    <div className='flex flex-col gap-3'>
      <div className='relative'>
        <div className='absolute flex gap-9 bg-black/[0%] hover:bg-black/[40%] transition duration-300 w-[500px] h-[400px] rounded-4xl items-center justify-center group'>
        <Link to={`/blog/${blog._id}`} className="text-blue-500 hover:text-blue-700">
          <BsArrowUpRightCircleFill className='text-5xl bg-white rounded-full text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </Link>
          <MdOutlineEdit className='text-5xl bg-white rounded-full p-2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          onClick={()=> { onEdit(blog)}}/>
          <GoTrash className='text-5xl bg-white rounded-full p-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' 
          onClick={handleDelete}/>

        </div>
        <img src={blog.imageUrl} alt="Blog" className='rounded-4xl w-[500px] object-cover h-[400px]' />
      </div>
      <div className='w-lg'>
        <p className='text-xl text-blue-500'>{blog.genre || 'General'}</p>
        <span className='text-3xl my-2 font-medium line-clamp-3'>{blog.title}</span>
        <p className='text-lg text-gray-500 line-clamp-3'>{blog.content}</p>

        <div className='flex items-center gap-5 text-gray-500 mt-6'>
          <p className='px-4 py-1 gap-1 border-1 border-gray-500 rounded-full flex items-center'> <RxEyeOpen className='text-xl' /> {blog.views} </p>
          <p className='px-4 py-1 gap-1 border-1 border-gray-500 rounded-full flex items-center'> <GoHeart className='text-xl' /> {blog.likes} </p>
          <p className='px-4 py-1 gap-1 border-1 border-gray-500 rounded-full flex items-center'> <HiOutlineChatBubbleBottomCenterText className='text-xl' /> {blog.comments.length} </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCardLG;