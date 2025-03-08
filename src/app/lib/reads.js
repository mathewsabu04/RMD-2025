import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";

export const getSchools = async () => {
  return (await getDocs(query(collection(db, "schools")))).docs.map(
    (docSnap) => ({
      ...docSnap.data(),
      id: docSnap.id,
    })
  );
};
