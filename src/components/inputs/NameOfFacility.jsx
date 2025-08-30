import React from "react";

import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";

function NameOfFacility() {
  const { NameOfFacility, setNameOfFacility } = useGlobalStore();
  useEffect(() => {
    console.log(NameOfFacility);
  }, [NameOfFacility]);

  return (
    <div className="w-full md:w-5/6 rounded-md ">
      <h1 className="text-base font-semibold text-gray-600 mb-1">
        Name Of Facility
      </h1>
      <input
        onChange={(e) => {
          setNameOfFacility(e.target.value);
        }}
        type="text"
        className="w-full  h-10  rounded ring-1 ring-[#002B5A]/20 focus:ring-1 focus:outline-none focus:ring-[#002B5A]/40 px-3 self-center"
      />
    </div>
  );
}

export default NameOfFacility;
