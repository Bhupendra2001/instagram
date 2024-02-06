"use client"
import React, { useState } from 'react'
import { posts } from '@/constants'
import Image from 'next/image'
import { IoMdMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

const Posts = () => {
  
  const [likedPosts, setLikedPosts] = useState<boolean>(false);
  const [savedPosts, setSavedPosts] = useState<boolean>(false);

  const handleLikeClick = () => {
    setLikedPosts(!likedPosts)
  };

  const handleSaveClick = () => {
    setSavedPosts(!savedPosts)
  };

  return (
    <div className='overflow-y-auto' style={{maxHeight : "80vh", msOverflowStyle: "none", scrollbarWidth: "none" }}>
      {posts.map((item )=>(
        <div key={item.key} className=' bg-gray-300' > 
        <div className='flex   justify-between '>
          <div className='flex gap-3 mt-5'>
        <Image src={item.profilePic} alt='pic' height={25} className='rounded-2xl ml-5 ' width={25}/>
        <p className='text-[12px] text-center pt-1'>{item.userName}</p>
          </div>
        <div className='mt-5'><IoMdMore/></div> 
        </div>
        <div className='mt-5 mb-3'>
        <Image src={item.image} alt='post' width={450} height={350} />
  
        </div>
        <div className='flex justify-between'>
        <div className='flex gap-4 ml-3'>
          <FaRegHeart 
          style={{ cursor: 'pointer', color: likedPosts == true ? 'black' : 'red' }}
          onClick={handleLikeClick} />
          <BiMessageRounded style={{cursor:'pointer'}} />
          <FiSend style={{cursor:'pointer'}}/>
        </div>
        <div className='mr-3'> <BsBookmark
         style={{ cursor: 'pointer', width: "18px", padding :"0px", color: savedPosts == true ? 'white' : 'inherit'}}
         onClick={handleSaveClick}
        /> </div>
        </div>
        <div className='flex flex-col '> 
          <p className='text-xs ml-3 mt-3'>{item.likes} likes</p>
          <p className='text-xs ml-3 mt-3'>{item.date}</p> 
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default Posts