import { getDocs, query, collection, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { where } from "firebase/firestore";

export const getSchools = async () => {
  //getting the collections of schools here, quering that, getting the documents
  return (await getDocs(query(collection(db, "schools")))).docs.map(
    (docSnap) => ({
      ...docSnap.data(), // schoolID, schoolName
      id: docSnap.id, // name of the school
    })
  );
};



export const getSchoolFromSchoolId = async (schoolID) => {
  return (await getDoc(doc(db, "schools", schoolID))).data();
};


export const getDorms = async (schoolID) => {
  //getting the collections of schools here, quering that, getting the documents
  return (
    await getDocs(
      query(collection(db, "dorms"), where("schoolID", "==", schoolID))
    )
  ).docs.map((docSnap) => ({
    ...docSnap.data(), // schoolID, schoolName
    id: docSnap.id, // name of the school
  }));
};


export const checkIfUserIsAdmin = async (uid) => {
  return (await getDoc(doc(db, "admins", uid))).exists();
};
