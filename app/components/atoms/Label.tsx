interface LabelProps {
  text: string;
  variant?: "open" | "closed";
}

function Label({ text, variant = "open" }: LabelProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        variant === "open"
          ? "bg-approval text-positive"
          : "bg-danger text-negative"
      }`}
    >
      {text}
    </span>
  );
}

export default Label;
