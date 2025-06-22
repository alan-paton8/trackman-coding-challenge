interface TextAreaInputProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

function TextAreaInput({ title, value, onChange, rows }: TextAreaInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{title}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={rows || 4}
      />
    </div>
  );
}

export default TextAreaInput;
