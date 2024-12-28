// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_xvEnA7jAH1eDGQJVVQ15N2vzbciqeiI",
  authDomain: "rmd-2025-f466f.firebaseapp.com",
  projectId: "rmd-2025-f466f",
  storageBucket: "rmd-2025-f466f.firebasestorage.app",
  messagingSenderId: "932693025373",
  appId: "1:932693025373:web:1c8a19641a0846e48fa3b4",
  measurementId: "G-JLHE72QSXP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // security 
export const db = getFirestore(app); // initailizing the database