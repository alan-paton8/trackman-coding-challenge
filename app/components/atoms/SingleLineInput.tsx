interface SingleLineInputProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
}

function SingleLineInput({ title, value, onChange }: SingleLineInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{title}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SingleLineInput;
