import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const stringToID = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9]/g, "");
};

export const setSchoolDoc = (schoolName) => {
  const schoolID = stringToID(String(schoolName));
  return setDoc(doc(db, "schools", schoolID), {
    schoolName: schoolName,
    schoolID: schoolID,
  });
};

export const setDormDoc = ({ schoolID, dormName }) => {
  const dormID = stringToID(`${schoolID} ${stringToID(dormName)}`);
  return setDoc(doc(db, "dorms", dormID), {
    schoolID: schoolID,
    dormID,
    dormName,
  });
};
