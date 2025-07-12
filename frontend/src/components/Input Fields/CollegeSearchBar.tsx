//used in cuny explore page

interface propType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  label?: string;
  name?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

const CollegeSearchBar = ({
  value,
  name,
  placeholder = "Search colleges...",
  label = "",
  type = "text",
  className = "",
  error,
  required = false,
  onChange,
}: propType) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`px-4 py-2 border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CollegeSearchBar;
