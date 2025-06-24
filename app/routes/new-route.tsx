import FacilityCard from "~/components/molecules/FacilityCard";
import facilities from "~/test-data";

function newRoute() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {facilities.map((facility) => (
        <FacilityCard
          key={facility.name}
          name={facility.name}
          address={facility.address}
          description={facility.description}
          imageUrl={facility.imageUrl}
          default={facility.default}
          openTime={facility.openTime}
          closeTime={facility.closeTime}
        />
      ))}
    </div>
  );
}

export default newRoute;
