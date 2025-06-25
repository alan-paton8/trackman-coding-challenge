import { useEffect, useState } from "react";
import CheckboxInput from "../atoms/CheckboxInput";
import SingleLineInput from "../atoms/SingleLineInput";
import TextAreaInput from "../atoms/TextAreaInput";
import Button from "./Button";
import { z } from "zod";
import { useNavigate } from "react-router";

export type Facility = {
  id: string;
  name: string;
  address: string;
  description?: string;
  imageUrl: string;
  isDefault?: boolean;
  openTime: string;
  closeTime: string;
};

interface FacilityFormProps {
  facilityData?: Facility;
}

//Set up Zod schema for form validation
const facilitySchema = z.object({
  name: z.string().min(1, "Facility name is required"),
  address: z.string().min(1, "Address is required"),
  description: z.string().optional(),
  imageUrl: z
    .string()
    .url("Invalid URL format")
    .min(1, "Image URL is required"),
  isDefault: z.boolean().optional(),
  openTime: z
    .string()
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Open time must be in the format HH:mm"
    ),
  closeTime: z
    .string()
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Close time must be in the format HH:mm"
    ),
});

function FacilityForm({ facilityData }: FacilityFormProps) {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: "",
    isDefault: facilities.length === 0,
    openTime: "",
    closeTime: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();

  if (facilityData) {
    useEffect(() => {
      setFormData({
        name: facilityData.name,
        address: facilityData.address,
        description: facilityData.description || "",
        imageUrl: facilityData.imageUrl,
        isDefault: facilityData.isDefault || false,
        openTime: facilityData.openTime,
        closeTime: facilityData.closeTime,
      });
    }, [facilityData]);
  }

  useEffect(() => {
    const facilitiesData = localStorage.getItem("facilities");
    const facilitiesDataParsed = facilitiesData
      ? JSON.parse(facilitiesData)
      : [];
    setFacilities(facilitiesDataParsed);
  }, []);

  const handleChange = (field: string, value: any) => {
    // Update form data
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Validate the field in real time
    const validationResult = facilitySchema.safeParse({
      ...formData,
      [field]: value,
    });

    if (!validationResult.success) {
      const fieldError =
        validationResult.error.formErrors.fieldErrors[
          field as keyof typeof facilitySchema.shape
        ];
      setErrors((prev) => ({
        ...prev,
        [field]: fieldError ? fieldError[0] : "",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = () => {
    const validationResult = facilitySchema.safeParse(formData);

    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error);
      setErrors(
        validationResult.error.formErrors.fieldErrors as Record<string, string>
      );
    } else {
      // If facilityData prop is provided, we are editing an existing facility
      if (facilityData) {
        const updatedFacility: Facility = {
          ...facilityData,
          ...formData,
        };
        // If this facility is marked as default, unset the previous default
        const updatedFacilities = facilities.map((facility) => ({
          ...(facility.id === updatedFacility.id ? updatedFacility : facility),
          isDefault: facility.id === updatedFacility.id ? true : false,
        }));
        localStorage.setItem("facilities", JSON.stringify(updatedFacilities));
      } else {
        const facilityWithId: Facility = {
          id: crypto.randomUUID(),
          ...formData,
        };
        let updatedFacilities = [...facilities, facilityWithId];
        if (facilities.length > 0 && formData.isDefault) {
          updatedFacilities = facilities.map((facility) => ({
            ...facility,
            isDefault: false,
          }));
        }
        localStorage.setItem(
          "facilities",
          JSON.stringify([...updatedFacilities])
        );
      }

      navigate("/facilities");
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Add Facility</h2>
      <div>
        <div className="space-y-4 sm:max-w-1/2 lg:max-w-2/5">
          <SingleLineInput
            title="Facility Name"
            value={formData.name}
            onChange={(value) => handleChange("name", value)}
            error={errors.name}
            required={true}
          />
          <SingleLineInput
            title="Address"
            value={formData.address}
            onChange={(value) => handleChange("address", value)}
            error={errors.address}
            required={true}
          />
          <TextAreaInput
            title="Description"
            value={formData.description}
            onChange={(value) => handleChange("description", value)}
            rows={3}
          />
          <SingleLineInput
            title="Image URL"
            value={formData.imageUrl}
            onChange={(value) => handleChange("imageUrl", value)}
            error={errors.imageUrl}
            required={true}
          />
          <div className="flex space-x-2">
            <CheckboxInput
              title="Default Facility"
              checked={facilities.length === 0 ? true : formData.isDefault}
              disabled={facilities.length === 0}
              onChange={(e) => handleChange("isDefault", e.target.checked)}
              description="Setting this facility as default will override the currently marked default facility."
            />
          </div>
          <div className="flex space-x-2">
            <SingleLineInput
              title="Open Time"
              value={formData.openTime}
              onChange={(value) => handleChange("openTime", value)}
              className="w-1/2"
              error={errors.openTime}
              required={true}
            />
            <SingleLineInput
              title="Close Time"
              value={formData.closeTime}
              onChange={(value) => handleChange("closeTime", value)}
              className="w-1/2"
              error={errors.closeTime}
              required={true}
            />
          </div>
        </div>
        <div className="flex mt-4 gap-2 justify-end">
          <Button
            text="Cancel"
            variant="secondary"
            onClick={() => navigate("/facilities")}
          />
          <Button
            text="Save Facility"
            variant="primary"
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </div>
  );
}

export default FacilityForm;
