// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe5LjuLBTEXX-EvUaNKIxlh7x_Atog_7w",
  authDomain: "himanshu-s-portfolio.firebaseapp.com",
  projectId: "himanshu-s-portfolio",
  storageBucket: "himanshu-s-portfolio.appspot.com",
  messagingSenderId: "723393651439",
  appId: "1:723393651439:web:6c8e068fcc40bc8399f11a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();