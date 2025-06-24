import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "~/components/molecules/Button";
import type { Facility } from "~/components/molecules/FacilityForm";
import FacilitiesGrid from "~/components/organisms/FacilitiesGrid";

function Facilities() {
  const [facilitiesParsed, setFacilitiesParsed] = useState<Facility[]>([]);
  const navigate = useNavigate();

  const fetchFacilities = () => {
    const facilities = localStorage.getItem("facilities");
    const facilitiesParsed = facilities ? JSON.parse(facilities) : [];
    setFacilitiesParsed(facilitiesParsed);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <>
      {facilitiesParsed.length > 0 ? (
        <FacilitiesGrid
          facilities={facilitiesParsed}
          onDeleteCallback={fetchFacilities}
        />
      ) : (
        <div className="flex flex-col gap-5 m-auto items-center justify-center h-80 text-gray-500">
          <span>No facilities available. Please add a facility.</span>
          <Button
            variant="primary"
            text="Create Facility"
            onClick={() => navigate("/facilities/add")}
          />
        </div>
      )}
    </>
  );
}

export default Facilities;
