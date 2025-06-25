import { useLocation } from "react-router";
import type { Route } from "./+types/edit";
import FacilityForm from "~/components/molecules/FacilityForm";

function EditFacility({ params }: Route.ComponentProps) {
  const location = useLocation();
  let facilityData = location.state?.facility;

  if (!facilityData) {
    const facilitiesData = localStorage.getItem("facilities");
    const facilitiesDataParsed = facilitiesData
      ? JSON.parse(facilitiesData)
      : [];
    if (facilitiesDataParsed.length === 0) {
      return <div>No facilities available to edit.</div>;
    }
    facilityData = facilitiesDataParsed.find(
      (facility: { id: string }) => facility.id === params.id
    );
  }
  return (
    <div className="flex flex-col gap-5 text-default">
      <h1 className="text-2xl font-bold">Edit Facility</h1>
      <FacilityForm facilityData={facilityData} />
    </div>
  );
}

export default EditFacility;
