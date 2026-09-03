type InputProps = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function Input({
  type = "text",
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg px-4 py-3 border border-gray-300 outline-none focus:border-gray-500"
    />
  );
}
