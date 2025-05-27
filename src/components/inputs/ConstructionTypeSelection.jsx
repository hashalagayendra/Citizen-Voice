"use client";
import { ChevronDown } from "lucide-react";

import React, { useState } from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";

const illegalConstructionTypes = [
  "Unauthorized Residential Buildings",
  "Encroachments on Public Land",
  "Unauthorized Commercial Structures",
  "Illegal Extensions or Modifications",
  "Structures on Protected or Reserved Land",
  "Unapproved Industrial Facilities",
  "Temporary or Informal Settlements (Shanties or Slums)",
  "Land Reclamation Without Permit",
  "Buildings Violating Zoning Laws",
  "Construction Without Environmental Clearance",
  "Unregistered Real Estate Developments",
];

function ConstructionTypeSelection() {
  const [toggleon, settoggleon] = useState(false);
  const { ConstructionType, setConstructionType } = useGlobalStore();

  useEffect(() => {
    console.log(ConstructionType);
  }, [ConstructionType]);

  return (
    <div className=" w-full md:w-5/6 rounded-md  relative">
      <h1 className="text-base font-semibold text-gray-600 mb-1 ">
        Type of construction
      </h1>
      <div
        onClick={() => {
          settoggleon((pre) => !pre);
        }}
        className="  h-10 w-full rounded ring-1 ring-[#002B5A]/20 hover:ring-1 hover:outline-none hover:ring-[#002B5A]/40 px-3 flex justify-center items-center   "
      >
        <h1
          className={`  ${
            !ConstructionType ? "text-gray-400 " : "text-gray-600 "
          } flex gap-3`}
        >
          {" "}
          <span>
            {!ConstructionType && (
              <ChevronDown className="self-center"></ChevronDown>
            )}
          </span>
          {!ConstructionType
            ? " Select Type of Construction"
            : ConstructionType}
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
        {illegalConstructionTypes.map((each, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setConstructionType(each);
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

export default ConstructionTypeSelection;
