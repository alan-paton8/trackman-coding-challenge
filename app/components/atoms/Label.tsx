interface LabelProps {
  text: string;
  variant?: "open" | "closed";
}

function Label({ text, variant = "open" }: LabelProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        variant === "open"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
      }`}
    >
      {text}
    </span>
  );
}

export default Label;
