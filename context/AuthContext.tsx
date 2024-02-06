'use client'
import { createContext , useEffect , useState} from  'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '@/firebase'

interface AuthUser {
    uid?: string;
    email?: string | null;
    name?: string | null;
    photoURL?: string | null;
    // Add other relevant user properties as needed
  }

interface AuthContextValue {
    currentUser: AuthUser | null;
  }
  

export const AuthContext = createContext<AuthContextValue>({
    currentUser: null,
})

export const AuthContextProvider = ({children} : {children : React.ReactNode})=> {

    const [currentUser , setCurrentUser] = useState <AuthUser | null>({});
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth , (user)=>{
            if(user){
                setCurrentUser({
                    uid : user.uid,
                    email : user.email,
                    name : user.displayName ,
                    photoURL : user.photoURL
                });
            }else {
                setCurrentUser(null);
              }
            
        });

        return ()=>{
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}> {children} 
        </AuthContext.Provider>
      )

}