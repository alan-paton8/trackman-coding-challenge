import * as Icons from "~/assets/icons/icons";

export type IconName = keyof typeof Icons;

function Icon({ name, className }: { name: IconName; className?: string }) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <span className="inline-block flex-shrink-0">
      <img src={IconComponent} alt={name} className={className} />
    </span>
  );
}

export default Icon;
