import { useNavigate } from "react-router";
import Button from "../molecules/Button";
import FacilityCard from "../molecules/FacilityCard";
import type { Facility } from "../molecules/FacilityForm";

function FacilitiesGrid({
  facilities,
  onDeleteCallback,
}: {
  facilities: Facility[];
  onDeleteCallback: () => void;
}) {
  const navigate = useNavigate();

  const sortedFacilities = [...facilities].sort((a, b) => {
    if (a.isDefault === b.isDefault) return 0;
    return a.isDefault ? -1 : 1;
  });

  return (
    <div className="flex flex-col items-end gap-2.5">
      <Button
        variant="primary"
        text="Create Facility"
        onClick={() => navigate("/facilities/add")}
      />
      <div className="grid grid-cols-1 gap-4 p-4 w-full sm:grid-cols-2 lg:grid-cols-3">
        {sortedFacilities.map((facility: Facility) => (
          <FacilityCard
            key={facility.id}
            id={facility.id}
            name={facility.name}
            address={facility.address}
            description={facility.description}
            imageUrl={facility.imageUrl}
            isDefault={facility.isDefault}
            openTime={facility.openTime}
            closeTime={facility.closeTime}
            onDelete={onDeleteCallback}
          />
        ))}
      </div>
    </div>
  );
}

export default FacilitiesGrid;
