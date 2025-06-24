import clsx from "clsx";
import Icon from "../atoms/Icon";

function DefaultBadge({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center rounded-full h-6.5 w-6.5 bg-default-badge",
        className
      )}
    >
      <Icon name="Star" />
    </div>
  );
}

export default DefaultBadge;
