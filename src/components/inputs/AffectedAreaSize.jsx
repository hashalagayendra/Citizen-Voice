import React from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";
function AffectedAreaSize() {
  const { Affected_Area, setAffected_Area } = useGlobalStore();

  useEffect(() => {
    console.log(Affected_Area);
  }, [Affected_Area]);
  return (
    <div className="w-full md:w-5/6 rounded-md ">
      <h1 className="text-base font-semibold text-gray-600 mb-1">
        Affected Area Sizes (m&sup2;)
      </h1>
      <input
        onChange={(e) => {
          setAffected_Area(e.target.value);
        }}
        type="number"
        className="w-full  h-10  rounded ring-1 ring-[#002B5A]/20 focus:ring-1 focus:outline-none focus:ring-[#002B5A]/40 px-3 self-center"
      />
    </div>
  );
}

export default AffectedAreaSize;
