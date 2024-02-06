import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className=''>
        <div className='flex justify-between mt-2 pl-2 pr-2  '>
            <Link href={'/'}> <MdHomeFilled/> </Link>
           
            <CiSearch className='cursor-pointer'/>

           
            <Link href={'/create'} >  <IoIosAddCircleOutline/></Link>

            <RiVideoLine className='cursor-pointer'/>
            <Link href={'/profile'} > <CgProfile/></Link>
           
        </div>
    </div>
  )
}

export default Footer