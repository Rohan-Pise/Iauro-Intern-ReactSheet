
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "rohan-s-app-e71c4.firebaseapp.com",
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: "rohan-s-app-e71c4",
  storageBucket: "rohan-s-app-e71c4.firebasestorage.app",
  messagingSenderId: "955882736695",
  appId: "1:955882736695:web:772735f8f40e1554bf83b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);