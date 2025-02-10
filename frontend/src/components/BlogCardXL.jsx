import React from 'react'
import { RxEyeOpen } from "react-icons/rx";
import { GoHeart } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const BlogCardXL = () => {
  return (
    <div className='flex gap-10 px-50'>
        <img src="https://img.freepik.com/premium-photo/young-woman-working-online-from-home-surfing-internet-with-laptop-computer_35674-16947.jpg" alt="" 
        className='w-2xl rounded-3xl object-cover h-[450px]' />
        <div className='py-5 pr-10'>
            <p className='text-2xl text-blue-500'>Gener</p>
            <span className='text-5xl my-6 font-medium line-clamp-3'>AI Magazine considers 10 of the best blogs for AI covering the latest changes and current trends in the world of artificial intelligence</span>
            <p className='text-lg text-gray-500 line-clamp-3'>With the AI industry rapidly hurtling towards an innovative future across multiple business sectors, there has inevitably been an influx of online information and advice for developers and those keen to keep up with digital progress.

Technology blogs are an equally engaging and informative way for consumers to stay up to date with the latest news on AI in businesses and global trends. AI Magazine therefore considers some of the top blogs on the subject of AI that cater towards those actively interested in AI development.</p>

            <div className='flex items-center gap-5 text-gray-500 mt-10'>
                <p className='px-4 py-1 gap-1  border-1 border-gray-500 rounded-full flex items-center'>  <RxEyeOpen className='text-xl'/> 6 </p>
                <p className='px-4 py-1 gap-1  border-1 border-gray-500 rounded-full flex items-center'>  <GoHeart className='text-xl'/> 7 </p>
                <p className='px-4 py-1 gap-1  border-1 border-gray-500 rounded-full flex items-center'>  <HiOutlineChatBubbleBottomCenterText className='text-xl'/> 8 </p>
            </div>
        </div>
    </div>
  )
}

export default BlogCardXL