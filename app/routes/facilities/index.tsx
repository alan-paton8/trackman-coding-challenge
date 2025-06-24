import { useEffect, useState } from "react";
import FacilityCard from "~/components/molecules/FacilityCard";
import type { Facility } from "~/components/molecules/FacilityForm";

function Facilities() {
  const [facilitiesParsed, setFacilitiesParsed] = useState<Facility[]>([]);

  const fetchFacilities = () => {
    const facilities = localStorage.getItem("facilities");
    const facilitiesParsed = facilities ? JSON.parse(facilities) : [];
    setFacilitiesParsed(facilitiesParsed);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {facilitiesParsed.map((facility: Facility) => (
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
          onDelete={fetchFacilities}
        />
      ))}
    </div>
  );
}

export default Facilities;
