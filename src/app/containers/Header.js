"use client";
import { signInWithGoogle, signOutFromGoogle } from "../lib/firebase";
import { useAuth } from "../lib/useAuth";
import Link from "next/link";

export const Header = () => {
  const { user, loading } = useAuth();
  console.log(user, loading);

  return (
    <div className="py-4 px-8 border-b font-medium flex justify-between">
      <Link href={"/"}>RMD</Link>

      {!loading && (
        <button
          type="button"
          className="hover:underline"
          onClick={user ? signOutFromGoogle : signInWithGoogle} // if there is a user object, we give the option to signout, else otherwise
        >
          Log {user ? <>out</> : <>in</>}
        </button>
      )}
    </div>
  );
};
