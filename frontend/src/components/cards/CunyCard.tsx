//used in CUNY explore page --> to display all school schools card

interface cardProp {
  image: string;
  name: string;
  location: string;
  onClick: () => void;
}

const CunyCard = ({ image, name, location, onClick }: cardProp) => {
  return (
    <div
      className="cursor-pointer max-w-xs mb-4 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default CunyCard;
