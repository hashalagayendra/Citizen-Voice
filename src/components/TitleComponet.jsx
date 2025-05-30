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
      className={`w-full md:max-w-56  h-28 md:h-64 rounded-2xl flex-row  flex md:flex-col items-center justify-start md:justify-center px-5 md:px-3 cursor-pointer ${
        id === navigateURL ? "ring-2 ring-blue-500 bg-blue-100" : "bg-blue-50"
      } hover:bg-blue-100`}
      onClick={() => {
        setnavigateURL(id);
      }}
    >
      <div className="relative h-full md:h-1/3  w-36  md:w-full ">
        <Icon
          className="absolute scale-200 h-1/3 self-center md:top-[90%] top-1/2 md:left-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 "
          strokeWidth={1}
        ></Icon>
      </div>

      <div className="md:h-2/3   w-full flex flex-col items-start md:items-center justify-center">
        <h1 className="font-semibold md:text-base text-sm text-center pb-2">
          {Title}
        </h1>
        <h1 className=" md:text-center text-start text-xs md:text-sm">
          {subtitle}
        </h1>
      </div>
    </div>
  );
}

export default TitleComponet;
