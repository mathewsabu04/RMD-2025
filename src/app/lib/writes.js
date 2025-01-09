const stringToID = (str) =>
{
    return str
    .toLowerCase()
    .trim()
    .replace (/\s+/g, '-')
    .replace (/[^a-z0-9]/g,'')
}

export const setSchoolDoc = (schoolName) =>{
    const schoolID = stringToID(schoolName);
    return setSchoolDoc(doc(db,"schools", schoolID), {
        schoolName: schoolName,
        schoolID: schoolID,
    });
}