"use client";
import React from "react";
import Link from "next/link";
import { signInWithGoogle, signOutFromGoogle } from "../lib/firebase";
import { useState } from "react";
import { useAuth } from "../lib/useAuth";

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
          onClick={user ? signOutFromGoogle : signInWithGoogle}
        >
          Log {user ? <>out</> : <>in</>}
        </button>
      )}
    </div>
  );
};
