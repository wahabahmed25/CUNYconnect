//input field used in signup and login form


interface InputOneProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  label?: string;
  name: string;
  error?: string;
  className?: string;
  required?: boolean;
}
const InputOne: React.FC<InputOneProps> = ({
value,
onChange,
placeholder,
type = "text",
label,
name,
error,
required,
className = "",
}) => {
return (
  <div className="space-y-1">
    {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
    <input
      id={name}
      required= {required}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#181A4D] focus:border-[#181A4D] outline-none transition duration-200 ${className}`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-500" data-testid={`${name}-error`}>
        {error}
      </p>
    )}
  </div>
);
};
export default InputOne;