"use client";
import { auth, db, storage } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";


import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
const page = () => {
  const [err, setErr] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [name , setName] = useState<string>('');
  const [email , setEmail] = useState<string>('');
  const [password , setPassword] = useState<string>('');
  const [image , setImage] = useState<File | null>(null)
 const router = useRouter()
  
  const handleSubmit = async (e: React.FormEvent)=>{
      setLoading(true);
      e.preventDefault();
      
    
    try{

        const res = await createUserWithEmailAndPassword(auth, email, password)

        const date = new Date().getTime();

        const storagRef = ref(storage , `${name + date}`)

        await uploadBytesResumable(storagRef ,image as Blob ).then(()=>{
            getDownloadURL(storagRef).then(async (downloadURL)=> {
                try{
                     //create profile

                     await setDoc(doc(db, "users", res.user.uid),{
                        uid : res.user.uid,
                        name,
                        email ,
                        photoURL :downloadURL,
                     })

                     alert("User Register successfully")
                   router.push('/login')
                }catch(err){
                    setErr(true);
                    setLoading(false)
                }
            })
        })
    }catch(err){
        setErr(true);
        setLoading(false);
    }

  }

  return (
    <div className="bg-violet-400 h-[100vh] ">
      <div className="bg-emerald-300 m-auto w-80  p-5 rounded ">
        <span className=" text-center text-white"> Register</span>
        <form onSubmit={handleSubmit}>
          <input
            className="outline-none p-2 mb-3 rounded-lg"
            type="text"
            placeholder="enter name"
            onChange={(e)=> setName(e.target.value)}
          />
          <input
            className="outline-none p-2 mb-3 rounded-lg"
            type="email"
            placeholder="enter email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            className="outline-none p-2 mb-3 rounded-lg"
            type="password"
            placeholder="enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <input type="file" className="hidden" id="file" onChange={(e)=> setImage(e.target.files?.[0] || null)} />
          <label className="flex gap-5" htmlFor="file">
            <FaImage
              style={{ color: "#8da4f1", fontSize: "25px", marginLeft: "5px" }}
            />
            <span>Add an avatar</span>
          </label>
          <button
            className="border-2 rounded-xl border-orange-200 p-2 mt-3 bg-blue-500"
            disabled={loading}
            type="submit"
          >
            Sign up
          </button>
          {loading && <span>uploading avtar please wait...</span>}
          {err && <span className="text-red-400">Something went wrong</span>}
        </form>
        <p style={{ fontSize: "12px", margin: "20px 20px 20px 0px" }}>
          You do have an account? <Link href={"/login"}>Login </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
