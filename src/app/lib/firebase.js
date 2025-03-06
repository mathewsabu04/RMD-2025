import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnWRP6rHp2wjwgJnid-uioMZXs2uritQM",
  authDomain: "rmd-2025-ccf15.firebaseapp.com",
  projectId: "rmd-2025-ccf15",
  storageBucket: "rmd-2025-ccf15.firebasestorage.app",
  messagingSenderId: "387385187515",
  appId: "1:387385187515:web:f852ca3ab2ec4aca289d9e",
  measurementId: "G-4Y0VE2TTJ9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = result.user;

    window.alert(`Signed in with ${user.email}`);
  } catch (e) {
    window.alert(e.message);
  }
};

export const signOutFromGoogle = async () => {
  try {
    await signOut(auth);

    window.alert("Signed out!");
  } catch (e) {
    window.alert(e.message);
  }
};
