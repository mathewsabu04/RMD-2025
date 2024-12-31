export default function Page({ params }) {
  const { schoolID, dormsID } = params;

  // Static data for demonstration purposes
  const data = {
    review:
      "This is a great dorm with excellent facilities and a friendly community.",
  };

  return (
    <div>
      <h1>Dorm Review</h1>
      <h2>School ID: {schoolID}</h2>
      <h2>Dorm ID: {dormsID}</h2>
      <p>{data.review}</p>
    </div>
  );
}
