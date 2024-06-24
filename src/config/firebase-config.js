// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVLWZHniMsymXSy0jKzyxSdfU7wr9Fj3o",
  authDomain: "expense-tracker-20383.firebaseapp.com",
  projectId: "expense-tracker-20383",
  storageBucket: "expense-tracker-20383.appspot.com",
  messagingSenderId: "860198968164",
  appId: "1:860198968164:web:0e4259e1a07a956b7ff871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// firebase login
// firebase init
// firebase deploy