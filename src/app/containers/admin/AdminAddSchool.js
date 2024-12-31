"use client";

import { useAuth } from "@/app/lib/useAuth";
import { useState } from "react";

export const AdminAddSchool = () => {
  const [schoolName, setSchoolName] = useState("");
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="p-6 max-w-md mx-auto border border-gray-300 rounded-lg shadow-md">
      <p className="text-2xl font-bold mb-5 text-center">Admin</p>
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="schoolName" className="mb-2 text-lg">
          School Name:
        </label>
        <input
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          className="p-2 text-lg mb-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="p-3 text-lg bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add School
        </button>
      </form>
    </div>
  );
};
