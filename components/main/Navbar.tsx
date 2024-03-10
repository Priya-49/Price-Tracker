"use client"
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed pt-[10px] z-50 px-10 bg-[#F9F6F6] '>
    <div className='w-full h-full flex flex-row items-center justify-between  m-auto px-[50px]'>
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
            <Image
            src='/assets/images/fins.jpg.png'
            alt="logo"
            width={50}
            height={90}
            className='cursor-pointer hover:animate-slowspin'
            />      
        <p   className='text-[25px]'>
            TRACK<span className='text-gray-500'>WISE</span>
        </p>
        </a>
             
        <div className="w-[500px] h-full flex flex-row items-center justify-between gap-[20px]">
            <div className='flex items-center justify-center w-full  h-full text-[20px] gap-[59px]'>
                <a href="#about-me" className="cursor-pointer">ABOUT</a>
                <a href="#about-me" className="cursor-pointer">SEARCH</a>
                <a href="#about-me" className="cursor-pointer">CONTACT</a>
                <a href="#about-me" className="cursor-pointer">LOGIN</a>
            </div>
        </div>

    </div>
</div>
  )
}

export default Navbar