interface CheckboxInputProps {
  title: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
}

function CheckboxInput({
  title,
  checked,
  disabled = false,
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
          disabled={disabled}
          onChange={onChange}
          className="h-4 w-4 accent-trackman border-gray-300 rounded focus:ring-blue-500 disabled:accent-trackman"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={title} className="font-medium text-gray-700">
          {title}
        </label>
        {description && (
          <p className="text-gray-500 sm:whitespace-nowrap">{description}</p>
        )}
      </div>
    </div>
  );
}

export default CheckboxInput;
