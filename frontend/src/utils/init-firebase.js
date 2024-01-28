// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ3x-kSFhzs5qe4LtDbhsGhBfTOdQA43E",
  authDomain: "huriye-6ecb0.firebaseapp.com",
  projectId: "huriye-6ecb0",
  storageBucket: "huriye-6ecb0.appspot.com",
  messagingSenderId: "223439002554",
  appId: "1:223439002554:web:4d44c3a617c5d095221b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)