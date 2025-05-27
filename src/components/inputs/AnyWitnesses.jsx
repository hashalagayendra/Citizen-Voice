import React from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";

function AnyWitnesses() {
  const { Any_Witnesses, setAny_Witnesses } = useGlobalStore();
  useEffect(() => {
    console.log(Any_Witnesses);
  }, [Any_Witnesses]);
  return (
    <div className="w-full md:w-5/6 rounded-md ">
      <h1 className="text-base font-semibold text-gray-600 mb-1">
        Any Witnesses
      </h1>
      <div className="flex gap-3">
        <div
          className={`w-full text-center text-gray-600 py-3 ring-1 text-sm md:text-base rounded ring-gray-400   ${
            Any_Witnesses === "yes" && "bg-blue-50"
          }`}
          onClick={() => {
            setAny_Witnesses("yes");
          }}
        >
          <h1> Yes</h1>
        </div>
        <div
          className={`w-full text-center  text-gray-600 text-sm md:text-base py-3 ring-1 rounded ring-gray-400 ${
            Any_Witnesses === "no" && "bg-blue-50"
          }`}
          onClick={() => {
            setAny_Witnesses("no");
          }}
        >
          No
        </div>
      </div>
    </div>
  );
}

export default AnyWitnesses;
