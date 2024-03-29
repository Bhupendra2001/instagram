'use client'
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";
import {AuthContext} from '@/context/AuthContext'
import { useContext  } from "react";
import { useRouter } from "next/navigation";

interface AuthUser {
  uid?: string;
  email?: string | null;
  name?: string | null;
  photoURL?: string | null;
  // Add other relevant user properties as needed
}



export default function Home() {
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
  );
}
