import Icon from "../atoms/Icon";
import Label from "../atoms/Label";
import Button from "./Button";

interface FacilityCardProps {
  name: string;
  address: string;
  description: string;
  imageUrl: string;
  default?: boolean;
  openTime?: string;
  closeTime?: string;
}

function isOpen(openTime: string, closeTime: string): boolean {
  const now = new Date();
  const open = new Date(now.toDateString() + " " + openTime);
  const close = new Date(now.toDateString() + " " + closeTime);

  // Handle cases where the closing time is past midnight
  if (close < open) {
    close.setDate(close.getDate() + 1);
  }

  return now >= open && now <= close;
}

function FacilityCard({
  name,
  address,
  description,
  imageUrl,
  default: isDefault = false,
  openTime,
  closeTime,
}: FacilityCardProps) {
  const isFacilityOpen =
    openTime && closeTime ? isOpen(openTime, closeTime) : false;

  return (
    <div className="p-3 bg-white rounded-lg overflow-hidden hover:shadow-md">
      <img
        src={imageUrl}
        alt={name}
        className="w-full aspect-[1.83] mb-3 object-cover rounded-md"
      />
      <div>
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base text-default">{name}</h2>
          {openTime &&
            closeTime &&
            (isFacilityOpen ? (
              <Label text="Open" variant="open" />
            ) : (
              <Label text="Closed" variant="closed" />
            ))}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 overflow-hidden">
            <Icon name="Location" className="w-2.5 h-3 text-secondary" />
            <p className="text-sm leading-5 text-secondary whitespace-nowrap overflow-ellipsis overflow-hidden">
              {address}
            </p>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <Button variant="square" iconName="Delete" onClick={() => {}} />
            <Button variant="secondary" text="Edit" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityCard;
