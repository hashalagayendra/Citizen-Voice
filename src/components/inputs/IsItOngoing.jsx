import React from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";

function IsItOngoing() {
  const { Is_It_Ongoing, setIs_It_Ongoing } = useGlobalStore();
  useEffect(() => {
    console.log(Is_It_Ongoing);
  }, [Is_It_Ongoing]);
  return (
    <div className="w-full md:w-5/6 rounded-md ">
      <h1 className="text-base font-semibold text-gray-600 mb-1">
        Is It Ongoing
      </h1>
      <div className="flex gap-3">
        <div
          className={`w-full text-center text-gray-600 py-3 ring-1 text-sm md:text-base rounded ring-gray-400   ${
            Is_It_Ongoing === "yes" && "bg-blue-50"
          }`}
          onClick={() => {
            setIs_It_Ongoing("yes");
          }}
        >
          <h1> Yes</h1>
        </div>
        <div
          className={`w-full text-center  text-gray-600 text-sm md:text-base py-3 ring-1 rounded ring-gray-400 ${
            Is_It_Ongoing === "no" && "bg-blue-50"
          }`}
          onClick={() => {
            setIs_It_Ongoing("no");
          }}
        >
          No
        </div>
      </div>
    </div>
  );
}

export default IsItOngoing;
