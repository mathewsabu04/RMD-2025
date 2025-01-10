"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/lib/useAuth";
import { ButtonPrimary } from "@/app/components/Button";
import { setDormDoc } from "@/app/lib/writes";

export const AdminAddDorm = ({ schoolID }) => {
  const [dormName, setdormName] = useState("");
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return null;
  }

  const submitDorm = async (e) => {
    e.preventDefault();

    try {
      if (!dormName) {
        window.alert("Enter dorm");
        return;
      }

      await setDormDoc({ schoolID, dormName });
      window.alert(`${dormName} added`);
      setdormName("");
    } catch (e) {
      window.alert(e.message);
    }
  };

  return (
    <form
      onSubmit={submitDorm}
      className="space-y-2 bg-gray-100 border rounded p-4"
    >
      <p className="font-medium">Admin</p>

      <div className="space-x-2">
        <input
          name="dormName"
          className="border border-gray-400 rounded p-2"
          type="text"
          placeholder="Dorm Name"
          value={dormName}
          onChange={(e) => {
            setdormName(e.target.value);
          }}
        />

        <ButtonPrimary buttonType="submit" onClick={submitDorm}>
          Add Dorm
        </ButtonPrimary>
      </div>
    </form>
  );
};
