"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';
import { useRouter} from 'next/navigation'



const page = () => {
    const [err , setErr ]= useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
   const router = useRouter()


const handleSubmit =  async (e: React.FormEvent)=>{
  e.preventDefault();
  try{

    await signInWithEmailAndPassword(auth, email , password)
    alert('login successfully')
   router.push('/home')
  }catch(error){
   console.log(error)
   setErr(true);
  }
}
  return (
    <div className='bg-violet-400 h-[100vh] w-full fixed pt-24'>
        <div className='bg-emerald-300 m-auto w-80  p-5 rounded'>
            <span className='text-center text-lg  text-white '> Login</span>
            <form  onSubmit={handleSubmit}>
                <input
                className='outline-none p-2 mb-3 rounded-lg'
                 type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
               <input 
                className='outline-none p-2 mb-3 rounded-lg'
               type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
               <button 
               type='submit'
               className='border-2 rounded-xl border-orange-200 p-2 mt-3 bg-blue-500'
               > Sign in</button>
               {err && <span style={{color : "red"}}>Something went wrong...</span>}
            </form>
            <p style={{fontSize :"10px" ,marginTop : "10px"}}>You don't have account? <Link href={'/register'}>Register</Link> </p>
        </div>
    </div>
  )
}

export default page