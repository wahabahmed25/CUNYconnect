interface propType {
  resource: string;
  icon?: React.ReactNode | string;
}

const ResourcesCard = ({ resource, icon }: propType) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition duration-300">
      {typeof icon === "string" && icon ? (
        <img src={icon} alt="" className="h-9 w-9" />
      ) : (
        icon
      )}
      <p className="text-gray-800 font-medium">{resource}</p>
    </div>
  );
};

export default ResourcesCard;
