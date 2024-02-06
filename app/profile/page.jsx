"use client";

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { signOut } from 'firebase/auth'
import {auth} from '@/firebase'

const page = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (!currentUser) {
    router.push("/login");
  }

  return (
    <div className="">
      <div className="h-20"></div>
      <div
        style={{ backgroundColor: "teal", padding: "35px" }}
        className="w-80 h-[120px] m-auto rounded-xl"
      >
        <Image
          className="rounded-2xl"
          src="/bn.png"
          alt="logo"
          width={305}
          height={405}
        />
        <p style={{color : 'aqua'}}>@bhupendra namdev</p>
        <div className="text-red-300" style={{ color: "white" }}>
          Hello every one, my name is bhupendra namdev, i am frontend developer
        </div>
        <div className=" text-white text-xs">
          <a href="mailto:bnamdev20@gmail.com">bnamdev20@gmail.com </a>
        </div>
        <div className="flex justify-between">
        <Link style={{color : 'orange' , cursor : 'pointer'}} href={'/home'} >home</Link>
        <p style={{color : 'orange' , cursor : 'pointer'}} onClick={()=>signOut(auth)}  >logout</p>
        </div>
      </div>
    </div>
  );
};

export default page;
