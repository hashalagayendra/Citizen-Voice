import { ChevronLeft } from "lucide-react";
import { Cloudy } from "lucide-react";
import { Droplet } from "lucide-react";

import { Trash2 } from "lucide-react";
import { VenetianMask } from "lucide-react";
import { UserLock } from "lucide-react";
import { Pill } from "lucide-react";
import { SprayCan } from "lucide-react";
import {
  Eye,
  Car,
  ShieldOff,
  LightbulbOff,
  Waves,
  CircleAlert,
  CreateIcons,
  Building,
  Map,
  ShieldAlert,
  Volume2,
  Pin,
  HandCoins,
  ClipboardPen,
  ReceiptText,
  Receipt,
  BanknoteX,
  UserX,
  Scale,
  UserRoundMinus,
  CalendarX2,
  Hammer,
} from "lucide-react";

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
  Environmental_Hazards: {
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
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
      },
      {
        id: "NoisePollution",
        title: "Noise Pollution",
        subTitle:
          "Report excessive noise from construction, traffic, or events.",
        Icon: Volume2,
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
      },
      {
        id: "IllegalWasteDumping",
        title: "Illegal Waste Dumping",
        subTitle:
          "Report dumping of garbage, sewage, or hazardous materials in unauthorized areas.",
        Icon: Trash2,
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
      },
      {
        id: "RadiationorToxicExposure",
        title: "Radiation or Toxic Exposure",
        subTitle:
          "Report any incidents of harmful chemical/radioactive exposure.",
        Icon: Trash2,
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
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
        elements: [
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "AssaultorHarassment",
        title: "Assault or Harassment",
        subTitle: "Report physical assault or sexual harassment cases.",
        Icon: UserLock,
        elements: [
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "DrugDealing",
        title: "Drug Dealing Pollution",
        subTitle: "Report drug use or trafficking in your area.",
        Icon: Pill,
        elements: [
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "Vandalism",
        title: " Vandalism",
        subTitle: "Report deliberate damage to public or private property.",
        Icon: SprayCan,
        elements: [
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "SuspiciousActivities",
        title: " Suspicious Activities",
        subTitle: "Report unknown persons or behavior causing concern.",
        Icon: Eye,
        elements: [
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
    ],
  },
  Infrastructure_Issues: {
    title: "Infrastructure Issues Report Form",
    subTitle:
      "Provide details about the infrastructure issue you want to report",
    thirdTitle:
      "Select the type of infrastructure problem you are experiencing",
    subCatogoris: [
      {
        id: "PotholesAndDamagedRoads",
        title: "Potholes and Damaged Roads",
        subTitle: "Report unsafe road conditions.",
        Icon: Car,
        elements: [
          DiscrptionInput,
          MapSelection,
          AffectedAreaSize,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "BrokenStreetLights",
        title: "Water Broken Street Lights",
        subTitle:
          "Report contamination of rivers, lakes, or Report non-functioning or broken street lighting. ",
        Icon: LightbulbOff,
        elements: [
          DiscrptionInput,
          MapSelection,
          AffectedAreaSize,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "FloodedStreets",
        title: "Flooded Streets",
        subTitle: "Report poor drainage or water-logging",
        Icon: Waves,
        elements: [
          DiscrptionInput,
          MapSelection,
          AffectedAreaSize,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "OpenManholes",
        title: "Open Manholes",
        subTitle: "Report dangerous or uncovered manholes.",
        Icon: CircleAlert,
        elements: [
          DiscrptionInput,
          MapSelection,
          AffectedAreaSize,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "Non-functional Traffic Signals",
        title: "Non-functional Traffic Signals",
        subTitle: "Report issues related to air quality",
        Icon: LightbulbOff,
        elements: [
          DiscrptionInput,
          MapSelection,
          AffectedAreaSize,
          DatePicker,
          FileDropBox,
        ],
      },
    ],
  },
  Illegal_Constructions: {
    title: " Illegal Construction Complaint Form",
    subTitle:
      "Provide details about the illegal construction you wish to report",
    thirdTitle: "Select the specific type of construction violation involved",
    subCatogoris: [
      {
        id: "UnauthorizedBuildings",
        title: "Unauthorized Buildings",
        subTitle: "Report illegal buildings or encroachments",
        Icon: Building,
        elements: [
          DiscrptionInput,
          MapSelection,
          ConstructionTypeSelection,
          IsItOngoing,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "ViolationOfZoningLaws",
        title: "Violation of Zoning Lawsts",
        subTitle:
          "Report construction activities violating land-use regulations.",
        Icon: Map,
        elements: [
          DiscrptionInput,
          MapSelection,
          ConstructionTypeSelection,
          IsItOngoing,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "NoisefromConstruction",
        title: "Noise from Construction",
        subTitle: "Report disturbing or illegal night-time construction work.",
        Icon: Volume2,
        elements: [
          DiscrptionInput,
          MapSelection,
          ConstructionTypeSelection,
          IsItOngoing,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "EncroachmentOnPublicLand",
        title: "Encroachment on Public Land",
        subTitle: "Report construction on roads, parks, or reserved lands.",
        Icon: Pin,
        elements: [
          DiscrptionInput,
          MapSelection,
          ConstructionTypeSelection,
          IsItOngoing,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "NoSafetyStandards",
        title: "No Safety Standards",
        subTitle: "Report construction without proper safety measures.",
        Icon: ShieldOff,
        elements: [
          DiscrptionInput,
          MapSelection,
          ConstructionTypeSelection,
          IsItOngoing,
          DatePicker,
          FileDropBox,
        ],
      },
    ],
  },
  Corruption_and_Bribery: {
    title: "Corruption and Bribery Report Form",
    subTitle:
      "Provide details about the corruption or bribery incident you want to report",
    thirdTitle: "Select the type of corrupt activity or bribery that occurred",
    subCatogoris: [
      {
        id: "BriberyDemands",
        title: "Bribery Demands",
        subTitle: "Report cases where bribes were requested for services.",
        Icon: HandCoins,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "FavoritismInTenders",
        title: "Favoritism in Tenders",
        subTitle: "Report unfair awarding of government contracts. ",
        Icon: ClipboardPen,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "MisuseOfPublicFunds",
        title: "Misuse of Public Funds",
        subTitle: "Report suspicious or improper spending of public money.",
        Icon: ReceiptText,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "UnauthorizedCharges",
        title: "Unauthorized Charges",
        subTitle: "Report illegal charges for free services.",
        Icon: Receipt,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "FakeBillingOrInvoicing",
        title: "Fake Billing or Invoicing",
        subTitle: "Report fraud in official billing or receipts.",
        Icon: BanknoteX,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          DatePicker,
          FileDropBox,
        ],
      },
    ],
  },
  Public_Employee_Misconduct: {
    title: "Public Employee Misconduct Report Form",
    subTitle: " Enter the details of the misconduct by a public employee",
    thirdTitle: "Select the type of corrupt activity or bribery that occurred",
    subCatogoris: [
      {
        id: "RudeBehaviorByStaff",
        title: "Rude Behavior by Staff",
        subTitle:
          "Report unprofessional or rude behavior from public employees",
        Icon: UserX,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "NegligenceOfDuty",
        title: "Negligence of Duty",
        subTitle: "Report employees failing to perform their duties. ",
        Icon: UserRoundMinus,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "BiasOrDiscrimination",
        title: "Bias or Discrimination",
        subTitle: "Report discrimination based on race, gender, religion, etc.",
        Icon: Scale,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "Absenteeism",
        title: "Absenteeism",
        subTitle: "Report public employees being repeatedly absent from work.",
        Icon: CalendarX2,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "MisuseOfResources",
        title: "Misuse of Resources",
        subTitle: "Report misuse of public resources by government staff.",
        Icon: Hammer,
        elements: [
          DepartmentSelection,
          PersonInvolved,
          DiscrptionInput,
          MapSelection,
          AnyWitnesses,
          DatePicker,
          FileDropBox,
        ],
      },
    ],
  },
  Poor_Public_Services: {
    title: " Public Services Issue Report Form",
    subTitle:
      "Help us address water supply problems, leakages, and contamination in your area.",
    thirdTitle:
      "Select the water-related problem you wish to report in your area",
    subCatogoris: [
      {
        id: "WaterSupplyIssues",
        title: "Water Supply Issues",
        subTitle:
          "Report problems related to interrupted or contaminated water supply.",
        Icon: Cloudy,
        elements: [DiscrptionInput, MapSelection, DatePicker, FileDropBox],
      },
      {
        id: "ElectricityOutages",
        title: "Electricity Outages",
        subTitle: "Report frequent or prolonged power cuts in your area.",
        Icon: Droplet,
        elements: [
          DiscrptionInput,
          MapSelection,
          IsItCurrentlyDangerous,
          DatePicker,
          FileDropBox,
        ],
      },
      {
        id: "HealthcareService",
        title: "Healthcare Service",
        subTitle:
          "Report poor service or long waiting times at public hospitals.",
        Icon: Volume2,
        elements: [
          FacilityTypeSetector,
          NameOfFacility,
          DiscrptionInput,
          MapSelection,
          AffectedAreaSize,
          DatePicker,
          FileDropBox,
        ],
      },
    ],
  },
};

export default catogoryData;
