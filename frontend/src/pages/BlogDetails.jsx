import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { RxEyeOpen } from 'react-icons/rx';
import { GoHeart } from 'react-icons/go';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  const fetchBlogDetails = () => {
    axios
      .get(`http://localhost:3000/api/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
      });
  };

  const handleIncreaseView = async () => {
    try {
      await axios.patch(`http://localhost:3000/api/blogs/${id}/view`);
      setBlog((prevBlog) => ({ ...prevBlog, views: prevBlog.views + 1 }));
    } catch (error) {
      console.error('Error increasing views:', error);
    }
  };

  const handleLikeBlog = async () => {
    try {
      await axios.patch(`http://localhost:3000/api/blogs/${id}/like`);
      setBlog((prevBlog) => ({ ...prevBlog, likes: prevBlog.likes + 1 }));
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        await axios.post(`http://localhost:3000/api/blogs/${id}/comment`, { commentText: newComment });
        setNewComment('');
        fetchBlogDetails(); 
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className='max-w-4xl mx-auto mt-10 p-6'>
      <Link to="/" className="flex items-center gap-3 text-2xl text-blue-500">
        <BsArrowLeft className='cursor-pointer' />
        <span className='font-semibold'>Back to Blogs</span>
      </Link>

      <div className='relative mt-6'>
        <img
          src={blog.imageUrl || 'https://via.placeholder.com/600x400'}
          alt={blog.title}
          className='rounded-2xl w-full h-[400px] object-cover'
          onLoad={handleIncreaseView} 
        />
      </div>

      <div className='mt-6'>
        <p className='text-xl text-blue-500'>{blog.genre || 'General'}</p>
        <h1 className='text-4xl font-bold mt-2'>{blog.title}</h1>
        <p className='text-sm text-gray-500 mt-2'>
          Posted on {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <div className='flex items-center gap-5 text-gray-500 mt-4'>
          <p className='px-4 py-1 gap-1 border-1 border-gray-500 rounded-full flex items-center'>
            <RxEyeOpen className='text-xl' /> {blog.views}
          </p>
          <p
            onClick={handleLikeBlog}
            className='px-4 py-1 gap-1 border-1 border-gray-500 rounded-full flex items-center cursor-pointer'
          >
            <GoHeart className='text-xl' /> {blog.likes}
          </p>
          <p className='px-4 py-1 gap-1 border-1 border-gray-500 rounded-full flex items-center'>
            <HiOutlineChatBubbleBottomCenterText className='text-xl' /> {blog.comments.length}
          </p>
        </div>
        <p className='text-lg text-gray-700 mt-4'>{blog.content}</p>
      </div>

      <div className='mt-6'>
        <h2 className='text-2xl font-semibold'>Comments</h2>
        <div className='mt-4'>
          {blog.comments.length > 0 ? (
            blog.comments.map((comment, index) => (
              <div key={index} className='border-b py-3'>
                <p className='text-gray-700'>{comment.commentText}</p>
                <p className='text-sm text-gray-500'>
                  Posted on {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
        <div className='mt-4'>
          <textarea
            className='w-full p-3 border-2 border-gray-300 rounded-md'
            placeholder='Add a comment...'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleAddComment}
            className='mt-3 px-4 py-2 bg-blue-500 text-white rounded-md'
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
