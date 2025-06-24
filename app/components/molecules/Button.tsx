import Icon, { type IconName } from "../atoms/Icon";
import { cn } from "~/lib/utils";

interface ButtonProps {
  text?: string;
  variant?: "primary" | "secondary" | "square";
  onClick: () => void;
  iconName?: IconName;
}

function Button({ text, variant = "primary", onClick, iconName }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex",
        "gap-1",
        "items-center",
        "justify-center",
        "text-sm",
        "font-semibold",
        "hover:cursor-pointer",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-blue-500",
        "focus:ring-opacity-50",
        variant == "primary" && [
          "bg-trackman",
          "text-trackman-secondary",
          "w-max",
          "py-1.5",
          "px-5.5",
          "rounded",
          "hover:bg-trackman-hover",
        ],
        variant == "secondary" && [
          "bg-trackman-secondary",
          "text-default",
          "w-max",
          "py-1.5",
          "px-5.5",
          "rounded",
          "hover:bg-trackman-secondary-hover",
        ],
        variant == "square" && [
          "bg-trackman-secondary",
          "p-2",
          "rounded",
          "aspect-square",
          "w-8",
          "hover:bg-trackman-secondary-hover",
        ]
      )}
    >
      {text}
      {iconName && <Icon name={iconName} />}
    </button>
  );
}

export default Button;
