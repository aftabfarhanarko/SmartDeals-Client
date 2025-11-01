
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1dtQWr0VQQk_kNVAty88THn379NDJrms",
  authDomain: "smartdeals-3e017.firebaseapp.com",
  projectId: "smartdeals-3e017",
  storageBucket: "smartdeals-3e017.firebasestorage.app",
  messagingSenderId: "1049963408663",
  appId: "1:1049963408663:web:d903d56936bd16059c1b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
