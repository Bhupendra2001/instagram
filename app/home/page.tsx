'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Posts from '@/components/Posts'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import {AuthContext} from '@/context/AuthContext'
import { useContext  } from "react";
import { useRouter } from "next/navigation";
interface currentUser {
  uid?: string;
  email?: string | null;
  name?: string | null;
  photoURL?: string | null;
  // Add other relevant user properties as needed
}


const page = () => {
  const { currentUser } = useContext(AuthContext);
   const router = useRouter()

   if(!currentUser){
    router.push('/login')
   }

  return (
    <main className=" bg-white h-20  ">
      <div className="flex  ">
        <Sidebar />
        <div className="w-[450px] lg:ml-40" >
          <Navbar />
          <Posts />
          <Footer/>
        </div>
      </div>
    </main>
  )
}

export default page