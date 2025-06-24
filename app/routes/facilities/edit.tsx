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
  return <FacilityForm facilityData={facilityData} />;
}

export default EditFacility;
