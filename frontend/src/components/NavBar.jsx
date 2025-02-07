import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-15 py-3 '>
        <div className='flex items-center gap-3'>
            <img src="/cube.svg" alt="" className='h-13'/>
            <p className='text-xl font-extrabold text-blue-950'>CUBE BLOG</p>
        </div>

        <ul className='flex gap-7 text-lg font-medium text-gray-400'>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Subscribe</a></li>
        </ul>

        <div>
            <button className='bg-blue-500 rounded-full px-10 py-1 text-white font-medium text-lg'>Create</button>
        </div>
    </div>
  )
}

export default NavBar