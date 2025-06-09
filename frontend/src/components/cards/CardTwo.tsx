//used in landing page "feature" componenet

interface CardProp {
  image?: React.ReactNode | string;
  title: string;
  description: string;
}

const CardTwo = ({ image, title, description }: CardProp) => {
  return (
    <div className="bg-white border hover:cursor-default border-black rounded-lg p-4 text-center transition transform hover:scale-105 hover:shadow-lg duration-300 w-full  m-4">
      <div className="flex justify-center mb-4">
        {typeof image === "string" ? (
          <img src={image} alt="icon" className="h-9 w-9" />
        ) : (
          image
        )}
      </div>
      <h1 className="font-bold text-lg mb-2">{title}</h1>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default CardTwo;
