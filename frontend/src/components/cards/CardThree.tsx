//used in landing page events
interface CardProp {
  date: string;       // Format: ISO string or any valid date string
  title: string;
  school: string;
  description: string;
}

const CardThree = ({ date, title, school, description }: CardProp) => {
  // Format date to "Mon 4"
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="border border-gray-200 rounded-lg p-5 m-4 shadow-sm hover:shadow-md transition duration-200 bg-white max-w-sm w-full">
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-blue-100 text-blue-700 font-semibold text-lg px-3 py-1 rounded-full">
          {formattedDate}
        </div>
        <h1 className="text-lg font-bold text-gray-900">{title}</h1>
      </div>
      <p className="text-sm text-gray-500 mb-2">{school}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default CardThree;
