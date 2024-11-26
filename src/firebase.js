// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkp1dvHe4Kx5TN6vTiUEjtw9NeDBDwDdw",
  authDomain: "rohan-s-app-e71c4.firebaseapp.com",
  databaseURL: "https://rohan-s-app-e71c4-default-rtdb.firebaseio.com",
  projectId: "rohan-s-app-e71c4",
  storageBucket: "rohan-s-app-e71c4.firebasestorage.app",
  messagingSenderId: "955882736695",
  appId: "1:955882736695:web:772735f8f40e1554bf83b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);