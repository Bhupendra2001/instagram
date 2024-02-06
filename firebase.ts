import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB7oLcdFxgFjLjqSDxR1yMBHvMuee_9axs",
  authDomain: "instagram-a4310.firebaseapp.com",
  projectId: "instagram-a4310",
  storageBucket: "instagram-a4310.appspot.com",
  messagingSenderId: "524876305018",
  appId: "1:524876305018:web:13d9047b387ebae28f21c3",
  measurementId: "G-322HF5ZFX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()