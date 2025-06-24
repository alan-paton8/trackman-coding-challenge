import clsx from "clsx";

interface TextAreaInputProps {
  title: string;
  value: string;
  className?: string;
  onChange: (value: string) => void;
  rows?: number;
}

function TextAreaInput({
  title,
  value,
  className,
  onChange,
  rows,
}: TextAreaInputProps) {
  return (
    <div className={clsx("flex flex-col", className)}>
      <label className="text-sm font-medium text-gray-700 mb-1" htmlFor={title}>
        {title}
      </label>
      <textarea
        id={title}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={rows || 4}
      />
    </div>
  );
}

export default TextAreaInput;
