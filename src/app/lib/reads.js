import { getDocs, query, collection } from "firebase/firestore";
import { db } from "./firebase";

export const getSchools = async () => {
  //getting the collections of schools here, quering that, getting the documents
  return (await getDocs(query(collection(db, "schools")))).docs.map(
    (docSnap) => ({
      ...docSnap.data(), // schoolID, schoolName
      id: docSnap.id, // name of the school
    })
  );
};
