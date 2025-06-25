import FacilityForm from "~/components/molecules/FacilityForm";

function AddFacility() {
  return (
    <div className="flex flex-col gap-5 text-default">
      <h1 className="text-2xl font-bold">Create a New Facility</h1>
      <FacilityForm />
    </div>
  );
}

export default AddFacility;
