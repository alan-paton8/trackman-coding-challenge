interface CheckboxInputProps {
  title: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
}

function CheckboxInput({
  title,
  checked,
  onChange,
  description,
}: CheckboxInputProps) {
  return (
    <div className="flex items-start mb-4">
      <div className="flex items-center h-5">
        <input
          id={title}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={title} className="font-medium text-gray-700">
          {title}
        </label>
        {description && <p className="text-gray-500">{description}</p>}
      </div>
    </div>
  );
}

export default CheckboxInput;
