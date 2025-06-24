import * as Icons from "~/assets/icons/icons";
import { cn } from "~/lib/utils";

export type IconName = keyof typeof Icons;

function Icon({
  name,
  className,
  wrapperClass,
}: {
  name: IconName;
  className?: string;
  wrapperClass?: string;
}) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <span className={cn("inline-block flex-shrink-0", wrapperClass)}>
      <img src={IconComponent} alt={name} className={className} />
    </span>
  );
}

export default Icon;
