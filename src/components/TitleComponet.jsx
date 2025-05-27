import React from "react";
import { ChevronLeft } from "lucide-react";
import { Cloud } from "lucide-react";
import Link from "next/link";
function TitleComponet({
  id,
  Icon,
  Title,
  subtitle,
  setnavigateURL,
  navigateURL,
}) {
  return (
    <div
      className={`w-full sm:max-w-52 h-40 sm:h-56 rounded-2xl  flex flex-col items-center  justify-center px-7 gap-6 cursor-pointer ${
        id === navigateURL ? "ring-2 ring-blue-500 bg-blue-100" : "bg-blue-50"
      } hover:bg-blue-100`}
      onClick={() => {
        setnavigateURL(id);
      }}
    >
      <Icon className="scale-200 " strokeWidth={1}></Icon>

      <div>
        <h1 className="font-semibold md:text-base text-sm text-center pb-2">
          {Title}
        </h1>
        <h1 className="text-center md:text-base text-sm">{subtitle}</h1>
      </div>
    </div>
  );
}

export default TitleComponet;
