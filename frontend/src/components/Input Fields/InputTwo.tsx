
interface InputTwoProps {
  value: string;
  name: string;
  placeholder?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTwo = ({ value, name, placeholder,type, onChange }: InputTwoProps) => {
  return (
    <div className="w-full">
      <input
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className="border p-2 w-full"
    />
    </div>
  );
};

export default InputTwo;
