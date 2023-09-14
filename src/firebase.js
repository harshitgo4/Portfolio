
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD1z55Ch12SaS4ovMZ0mYLmFhLseCn0b3k",
  authDomain: "harshit-portfolio-2.firebaseapp.com",
  projectId: "harshit-portfolio-2",
  storageBucket: "harshit-portfolio-2.appspot.com",
  messagingSenderId: "593390624553",
  appId: "1:593390624553:web:099ff1f0e385a1cd8f2138"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Db=getFirestore();