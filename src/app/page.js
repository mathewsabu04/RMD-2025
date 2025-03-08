import { getSchools } from "./lib/reads";
import Link from "next/link";

export default async function Home() {
  const schools = await getSchools();

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-medium">Rate College Dorms</h1>

      <div>
        <p className="font-medium">Select your school</p>

        {schools.map((school) => (
          // the key helps react keep track of each item in the list
          // {school.schoolName} - Displays the school's name inside the link
          <Link className="block" href={`/dorms/${school.id}`} key={school.id}>
            {school.schoolName}
          </Link>
        ))}
      </div>
    </div>
  );
}
