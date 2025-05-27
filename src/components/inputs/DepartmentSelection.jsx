"use client";
import { ChevronDown } from "lucide-react";

import React, { useState } from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";

const sriLankaGovDepartments = [
  "Department of Immigration and Emigration",
  "Department of Motor Traffic",
  "Department of Examinations",
  "Department of Census and Statistics",
  "Department of Registration of Persons",
  "Department of Posts",
  "Department of Agriculture",
  "Department of Inland Revenue",
  "Department of Labour",
  "Department of Fisheries",
];
function DepartmentSelection() {
  const [toggleon, settoggleon] = useState(false);
  const { Department, setDepartment } = useGlobalStore();

  useEffect(() => {
    console.log(Department);
  }, [Department]);
  return (
    <div className=" w-full md:w-5/6 rounded-md  relative">
      <h1 className="text-base font-semibold text-gray-600 mb-1 ">
        Department/agency involved
      </h1>
      <div
        onClick={() => {
          settoggleon((pre) => !pre);
        }}
        className="  h-10 w-full rounded ring-1 ring-[#002B5A]/20 hover:ring-1 hover:outline-none hover:ring-[#002B5A]/40 px-3 flex justify-center items-center   "
      >
        <h1
          className={`  ${
            !Department ? "text-gray-400 " : "text-gray-600 "
          } flex gap-3`}
        >
          {" "}
          <span>
            {!Department && <ChevronDown className="self-center"></ChevronDown>}
          </span>
          {!Department ? "Department/agency" : Department}
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
        {sriLankaGovDepartments.map((each, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setDepartment(each);
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

export default DepartmentSelection;
