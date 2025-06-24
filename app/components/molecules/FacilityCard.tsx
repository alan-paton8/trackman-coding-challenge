import { useState } from "react";
import Icon from "../atoms/Icon";
import Label from "../atoms/Label";
import DeleteModal from "../organisms/DeleteModal";
import Button from "./Button";
import type { Facility } from "./FacilityForm";
import { useNavigate } from "react-router";

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
  id,
  name,
  address,
  description,
  imageUrl,
  isDefault,
  openTime,
  closeTime,
  onDelete = () => {}, // Default to a no-op function
}: Facility & {
  onDelete?: () => void;
}) {
  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);
  const isFacilityOpen =
    openTime && closeTime ? isOpen(openTime, closeTime) : false;

  console.log("Rendering FacilityCard:", id);
  const handleEdit = () => {
    navigate(`/facilities/edit/${id}`, {
      state: {
        facility: {
          id,
          name,
          address,
          description,
          imageUrl,
          isDefault,
          openTime,
          closeTime,
        },
      },
    });
  };

  const handlePreDelete = () => {
    setIsDeleting(true);
  };

  const handleDelete = () => {
    const facilities = localStorage.getItem("facilities");
    const facilitiesParsed = facilities ? JSON.parse(facilities) : [];

    if (isDefault) {
      const nextDefault = facilitiesParsed.find(
        (facility: Facility) => facility.id !== id && !facility.isDefault
      );
      if (nextDefault) {
        nextDefault.isDefault = true;
        localStorage.setItem("facilities", JSON.stringify(facilitiesParsed));
      }
    }

    const updatedFacilities = facilitiesParsed.filter(
      (facility: Facility) => facility.id !== id
    );

    localStorage.setItem("facilities", JSON.stringify(updatedFacilities));
    setIsDeleting(false);
    onDelete();
  };

  const onClose = () => {
    setIsDeleting(false);
  };

  return (
    <>
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
              <Button
                variant="square"
                iconName="Delete"
                onClick={() => handlePreDelete()}
              />
              <Button
                variant="secondary"
                text="Edit"
                onClick={() => handleEdit()}
              />
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        isOpen={isDeleting}
        onClose={onClose}
        onDelete={handleDelete}
        facilityId={id}
        facilityName={name}
      />
    </>
  );
}

export default FacilityCard;
