import { getSchoolFromSchoolId } from "@/app/lib/reads";
import Link from "next/link";
import { getDorms } from "@/app/lib/reads";
import { AdminAddDorm } from "@/app/containers/admin/AdminAddDorm";

//the header of the website when the user
export async function generateMetadata({ params }) {
  const { schoolID } = await params;
  const { schoolName } = await getSchoolFromSchoolId(schoolID);

  return {
    title: `${schoolName} Dorms`,
    description: `${schoolName} dorm reviews`,
  };
}

export default async function Page({ params }) {
  const { schoolID } = params;

  const school = await getSchoolFromSchoolId(schoolID); //get the school from the schoolID
  const dorms = await getDorms(schoolID);

  return (
    <div className="space-y-2">
      <Link className="block text-sm hover:underline" href={"/"}>
        &#8592; All School{" "}
      </Link>
      <h1 className="text-3xl font-bold"> {school.schoolName} Dorms</h1>
      <p className="text-lg text-gray-700">
        Browse {dorms.length} dorm{dorms.length !== 1 && <>s</>}
      </p>

      <ul>
        {dorms.map((dorm) => {
          return (
            <li key={dorm.dormID}>
              <Link
                className="hover:underline"
                href={`/review/${schoolID}/${dorm.dormID}`}
              >
                {dorm.dormName}
              </Link>
            </li>
          );
        })}
      </ul>
      <AdminAddDorm schoolID = {schoolID} />
    </div>
  );
}
