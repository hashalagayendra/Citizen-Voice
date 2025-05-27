import React from "react";
import { Cloud } from "lucide-react";
function TitleComponet() {
  return (
    <div className=" w-full sm:max-w-52 h-40 sm:h-56 rounded-2xl bg-gray-200 flex flex-col items-center  justify-center px-7 gap-6">
      <Cloud className="scale-200 " strokeWidth={1}></Cloud>
      <div>
        <h1 className="font-semibold md:text-base text-sm text-center pb-2">
          Air Pollution
        </h1>
        <h1 className="text-center md:text-base text-sm">
          Report issues related to air quality
        </h1>
      </div>
    </div>
  );
}

export default TitleComponet;
