// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyMCNySglGw4mHCpBgQeplZjvJp7KeaeI",
  authDomain: "dragon-news-auth-ad4b1.firebaseapp.com",
  projectId: "dragon-news-auth-ad4b1",
  storageBucket: "dragon-news-auth-ad4b1.appspot.com",
  messagingSenderId: "549971128479",
  appId: "1:549971128479:web:91ef226cbdcc96c741f2aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;