import { ChevronLeft } from "lucide-react";
import { Cloudy } from "lucide-react";
import { Droplet } from "lucide-react";
import { Volume2 } from "lucide-react";
import { Trash2 } from "lucide-react";
import { VenetianMask } from "lucide-react";
import { UserLock } from "lucide-react";
import { Pill } from "lucide-react";
import { SprayCan } from "lucide-react";
import { Eye } from "lucide-react";

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
        Icon: Cloudy,
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
      },
      {
        id: "WaterPollution",
        title: "Water Pollution",
        subTitle:
          "Report contamination of rivers, lakes, or public water sources.",
        Icon: Droplet,
        elements: [],
      },
      {
        id: "NoisePollution",
        title: "Noise Pollution",
        subTitle:
          "Report excessive noise from construction, traffic, or events.",
        Icon: Volume2,
        elements: [],
      },
      {
        id: "IllegalWasteDumping",
        title: "Illegal Waste Dumping",
        subTitle:
          "Report dumping of garbage, sewage, or hazardous materials in unauthorized areas.",
        Icon: Trash2,
        elements: [],
      },
      {
        id: "RadiationorToxicExposure",
        title: "Radiation or Toxic Exposure",
        subTitle:
          "Report any incidents of harmful chemical/radioactive exposure.",
        Icon: Trash2,
        elements: [],
      },
    ],
  },
  Crime: {
    title: "Crime and Safety Complaint Form",
    subTitle:
      "Report criminal or suspicious activities to support a safer community.",
    thirdTitle:
      "Select the type of suspicious or criminal activity you would like to report.",
    subCatogoris: [
      {
        id: "TheftorBurglary",
        title: "Theft or Burglary",
        subTitle: "Report incidents of stealing or break-ins",
        Icon: VenetianMask,
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
      },
      {
        id: "AssaultorHarassment",
        title: "Assault or Harassment",
        subTitle: "Report physical assault or sexual harassment cases.",
        Icon: UserLock,
        elements: [],
      },
      {
        id: "DrugDealing",
        title: "Drug Dealing Pollution",
        subTitle: "Report drug use or trafficking in your area.",
        Icon: Pill,
        elements: [],
      },
      {
        id: "Vandalism",
        title: " Vandalism",
        subTitle: "Report deliberate damage to public or private property.",
        Icon: SprayCan,
        elements: [],
      },
      {
        id: "SuspiciousActivities",
        title: " Suspicious Activities",
        subTitle: "Report unknown persons or behavior causing concern.",
        Icon: Eye,
        elements: [],
      },
    ],
  },
  Infrastructure: {
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
        Icon: Cloudy,
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
      },
      {
        id: "WaterPollution",
        title: "Water Pollution",
        subTitle:
          "Report contamination of rivers, lakes, or public water sources.",
        Icon: Droplet,
        elements: [],
      },
      {
        id: "NoisePollution",
        title: "Noise Pollution",
        subTitle:
          "Report excessive noise from construction, traffic, or events.",
        Icon: Volume2,
        elements: [],
      },
      {
        id: "IllegalWasteDumping",
        title: "Illegal Waste Dumping",
        subTitle:
          "Report dumping of garbage, sewage, or hazardous materials in unauthorized areas.",
        Icon: Trash2,
        elements: [],
      },
      {
        id: "RadiationorToxicExposure",
        title: "Radiation or Toxic Exposure",
        subTitle:
          "Report any incidents of harmful chemical/radioactive exposure.",
        Icon: Trash2,
        elements: [],
      },
    ],
  },
  Illegal: {},
  Corruption: {},
  Public_Employee: {},
  Poor_Public: {},
};

export default catogoryData;
