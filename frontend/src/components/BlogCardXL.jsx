import React from 'react'
import { RxEyeOpen } from "react-icons/rx";
import { GoHeart } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const BlogCardXL = () => {
  return (
    <div className='flex gap-10 px-50'>
        <img src="https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg" alt="" 
        className='w-2xl rounded-3xl object-cover h-[450px]' />
        <div className='py-5 pr-10'>
            <p className='text-2xl text-blue-500'>Gener</p>
            <span className='text-5xl my-6 font-medium line-clamp-3'>Title Title Title Title Title Title Title  Title Title Title Title Title Title Title</span>
            <p className='text-lg text-gray-500 line-clamp-3'> description description descriptiondescription description descriptiondescription description description description</p>

            <div className='flex items-center gap-5 text-gray-500 mt-10'>
                <p className='px-4 py-1 gap-1  border-1 border-gray-500 rounded-full flex items-center'>  <RxEyeOpen className='text-xl'/> 67 </p>
                <p className='px-4 py-1 gap-1  border-1 border-gray-500 rounded-full flex items-center'>  <GoHeart className='text-xl'/> 67 </p>
                <p className='px-4 py-1 gap-1  border-1 border-gray-500 rounded-full flex items-center'>  <HiOutlineChatBubbleBottomCenterText className='text-xl'/> 67 </p>
            </div>
        </div>
    </div>
  )
}

export default BlogCardXL