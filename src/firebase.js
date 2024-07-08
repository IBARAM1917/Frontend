// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "iba-products.firebaseapp.com",
  projectId: "iba-products",
  storageBucket: "iba-products.appspot.com",
  messagingSenderId: "230779874040",
  appId: "1:230779874040:web:2ccdfc86698b3e77f5690d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);