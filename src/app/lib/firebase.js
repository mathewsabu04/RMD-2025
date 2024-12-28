import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_xvEnA7jAH1eDGQJVVQ15N2vzbciqeiI",
  authDomain: "rmd-2025-f466f.firebaseapp.com",
  projectId: "rmd-2025-f466f",
  storageBucket: "rmd-2025-f466f.firebasestorage.app",
  messagingSenderId: "932693025373",
  appId: "1:932693025373:web:1c8a19641a0846e48fa3b4",
  measurementId: "G-JLHE72QSXP",
};



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
