"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/lib/useAuth";
import { ButtonPrimary } from "@/app/components/Button";
import { setSchoolDoc } from "@/app/lib/writes";


export const AdminAddSchool = () => {
  const [schoolName, setschoolName] = useState("");
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return null;
  }

  const submitSchool = async (e) => {
    e.preventDefault();

    try {
      if (schoolName.length === 0) {
        window.alert("Enter a school");
        return;
      }

      await setSchoolDoc(schoolName);
      window.alert(`${schoolName} added`);
      setschoolName("");
    } catch (e) {
      window.alert(e.message);
    }
  };

  return (
    <form
      onSubmit={submitSchool}
      className="space-y-2 bg-gray-100 border rounded p-4"
    >
      <p className="font-medium">Admin</p>

      <div className="space-x-2">
        <input
          name="schoolName"
          className="border border-gray-400 rounded p-2"
          type="text"
          placeholder="School Name"
          value={schoolName}
          onChange={(e) => {
            setschoolName(e.target.value);
          }}
        />

        <ButtonPrimary buttonType="submit" onClick={submitSchool}>
          Add School
        </ButtonPrimary>
      </div>
    </form>
  );
};
