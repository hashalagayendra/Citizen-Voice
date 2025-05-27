import React from "react";

import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";

function IsItCurrentlyDangerous() {
  const { Is_It_Dangerous, setIs_It_Dangerous } = useGlobalStore();
  useEffect(() => {
    console.log(Is_It_Dangerous);
  }, [Is_It_Dangerous]);

  return (
    <div className="w-full md:w-5/6 rounded-md ">
      <h1 className="text-base font-semibold text-gray-600 mb-1">
        Is it currently dangerous?
      </h1>
      <div className="flex gap-3">
        <div
          className={`w-full text-center text-gray-600 py-3 ring-1 text-sm md:text-base rounded ring-gray-400   ${
            Is_It_Dangerous === "yes" && "bg-blue-50"
          }`}
          onClick={() => {
            setIs_It_Dangerous("yes");
          }}
        >
          <h1> Yes</h1>
        </div>
        <div
          className={`w-full text-center  text-gray-600 text-sm md:text-base py-3 ring-1 rounded ring-gray-400 ${
            Is_It_Dangerous === "no" && "bg-blue-50"
          }`}
          onClick={() => {
            setIs_It_Dangerous("no");
          }}
        >
          No
        </div>
      </div>
    </div>
  );
}

export default IsItCurrentlyDangerous;
