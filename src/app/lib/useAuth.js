//this is used to keep track of the user
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

export const useAuth = () => {
  const [user, setUser] = useState(null); // keep track of the user
  const [loading, setLoading] = useState(true); // keep track of loading the user

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // if they see that we are signed in, we are setting the user to the user logged in, and loading to false
      setUser(user);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};
