import { ChevronLeft } from "lucide-react";

import DiscrptionInput from "@/components/inputs/DiscrptionInput";
import MapSelection from "@/components/inputs/MapSelection";
import DatePicker from "@/components/inputs/DatePicker";
import FileDropBox from "@/components/inputs/FileDropBox";
import AnyWitnesses from "@/components/inputs/AnyWitnesses";
import AffectedAreaSize from "@/components/inputs/AffectedAreaSize";
import IsItOngoing from "@/components/inputs/IsItOngoing";
import PersonInvolved from "@/components/inputs/PersonInvolved";
import DepartmentSelection from "@/components/inputs/DepartmentSelection";
import ConstructionTypeSelection from "@/components/inputs/ConstructionTypeSelection";
import IsItCurrentlyDangerous from "@/components/inputs/IsItCurrentlyDangerous";
import FacilityTypeSetector from "@/components/inputs/FacilityTypeSetector";
import NameOfFacility from "@/components/inputs/NameOfFacility";

const catogoryData = {
  Environment: {
    title: "Environmental Hazard Complaint Form",
    subTitle:
      "Report environmental issues to help us create a cleaner, safer environment",
    thirdTitle:
      "Select a category that best describes the environmental issue you want to report.",
    subCatogoris: [
      {
        id: "AirPollution",
        title: "Air Pollution",
        subTitle: "Report issues related to air quality",
        Icon: ChevronLeft,
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
      },
      {
        id: "WaterPollution",
        title: "Water Pollution",
        subTitle:
          "Report contamination of rivers, lakes, or public water sources.",
        Icon: ChevronLeft,
        elements: [],
      },
      {
        id: "NoisePollution",
        title: "Noise Pollution",
        subTitle:
          "Report excessive noise from construction, traffic, or events.",
        Icon: ChevronLeft,
        elements: [],
      },
      {
        id: "IllegalWasteDumping",
        title: "Illegal Waste Dumping",
        subTitle:
          "Report dumping of garbage, sewage, or hazardous materials in unauthorized areas.",
        Icon: ChevronLeft,
        elements: [],
      },
      {
        id: "RadiationorToxicExposure",
        title: "Radiation or Toxic Exposure",
        subTitle:
          "Report any incidents of harmful chemical/radioactive exposure.",
        Icon: ChevronLeft,
        elements: [],
      },
    ],
  },
  Crime: {},
  Infrastructure: {},
  Illegal: {},
  Corruption: {},
  Public_Employee: {},
  Poor_Public: {},
};

export default catogoryData;
