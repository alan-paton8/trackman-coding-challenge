import { cn } from "~/lib/utils";

interface SingleLineInputProps {
  title: string;
  value: string;
  className?: string;
  error?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

function SingleLineInput({
  title,
  value,
  className,
  error,
  required = false,
  onChange,
}: SingleLineInputProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label className="text-sm font-medium text-gray-700 mb-1" htmlFor={title}>
        {title}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={title}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
        suppressHydrationWarning
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default SingleLineInput;
