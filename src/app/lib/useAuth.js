//this is used to keep track of the user
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { checkIfUserIsAdmin } from "./reads";

export const useAuth = () => {
  const [user, setUser] = useState(null); // keep track of the user
  const [loading, setLoading] = useState(true); // keep track of loading the user
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // if they see that we are signed in, we are setting the user to the user logged in, and loading to false
      setUser(user);

      if (user) {
        // Assuming you have a way to determine if the user is an admin
        const isAdminUser = await checkIfUserIsAdmin(user.uid); // Replace with your actual admin check logic
        setIsAdmin(isAdminUser);
      }

      setLoading(false); // the authentication is done
    });

    return () => unsubscribe();
  }, []);

  return { user, loading, isAdmin };
};
