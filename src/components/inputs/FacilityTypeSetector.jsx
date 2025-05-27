"use client";
import { ChevronDown } from "lucide-react";

import React, { useState } from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";

const healthCareFacilityTypes = [
  "General Hospital",
  "Teaching Hospital",
  "District Hospital",
  "Base Hospital",
  "Divisional Hospital",
  "Rural Hospital",
  "Private Hospital",
  "Maternity Home",
  "Children’s Hospital",
  "Eye Hospital",
  "Dental Clinic",
  "Ayurvedic Hospital",
  "Medical Center",
  "Family Health Center",
  "Mobile Health Clinic",
  "Primary Care Unit",
  "Specialty Clinic",
  "Mental Health Facility",
  "Nursing Home",
  "Rehabilitation Center",
  "Diagnostic Laboratory",
  "Pharmacy or Drugstore",
  "Blood Bank",
  "Health Education Center",
];

function FacilityTypeSetector() {
  const [toggleon, settoggleon] = useState(false);
  const { FacilityType, setFacilityType } = useGlobalStore();

  useEffect(() => {
    console.log(FacilityType);
  }, [FacilityType]);

  return (
    <div className=" w-full md:w-5/6 rounded-md  relative">
      <h1 className="text-base font-semibold text-gray-600 mb-1 ">
        Type of Facility
      </h1>
      <div
        onClick={() => {
          settoggleon((pre) => !pre);
        }}
        className="  h-10 w-full rounded ring-1 ring-[#002B5A]/20 hover:ring-1 hover:outline-none hover:ring-[#002B5A]/40 px-3 flex justify-center items-center   "
      >
        <h1
          className={`  ${
            !FacilityType ? "text-gray-400 " : "text-gray-600 "
          } flex gap-3`}
        >
          {" "}
          <span>
            {!FacilityType && (
              <ChevronDown className="self-center"></ChevronDown>
            )}
          </span>
          {!FacilityType ? " Select Type of Facility" : FacilityType}
        </h1>
      </div>

      <div
        className={`absolute top-[110%] h-60 overflow-scroll w-full bg-white z-50 
        transition-all duration-200 ease-in-out 
        ${
          toggleon
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      >
        {healthCareFacilityTypes.map((each, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setFacilityType(each);
                settoggleon((pre) => !pre);
              }}
              className="w-full h-10  bg-blue-50 hover:bg-blue-100 mb-0.5 flex justify-center items-center"
            >
              <h1 className=" text-gray-600">{each}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FacilityTypeSetector;
