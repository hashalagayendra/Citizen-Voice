import React, { useEffect } from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { Button } from "@/components/ui/button";

function SeverityLevelForm() {
  const { Severity_Level, setSeverity_Level } = useGlobalStore();
  const { pageCount, setPageCount } = useGlobalStore();

  useEffect(() => {
    console.log(Severity_Level);
  }, [Severity_Level]);
  return (
    <div className="bg-white w-full px-12 max-sm:px-4 rounded-b-2xl py-6">
      <h1 className="md:text-2xl text-xl  text-[#002B5A]">
        How severe is the issue?
      </h1>
      <p className=" mt-4 mb-1 ">Severity Level</p>

      <div className="cursor-pointer flex flex-col gap-6">
        <div className="  rounded-md ring-1 ring-gray-300">
          <label className="w-ful h-full px-10 flex  py-6 justify-between">
            <h1 className="font-semibold md:text-base text-sm ">Low</h1>
            <h1 className="hidden md:flex">Minimal impact, not urgent</h1>
            <input
              className="scale-150 "
              type="radio"
              name="SeverityLevel"
              value="Low"
              checked={Severity_Level === "Low"}
              onChange={(e) => setSeverity_Level(e.target.value)}
            />
          </label>
        </div>

        <div className=" cursor-pointer rounded-md ring-1 ring-gray-300">
          <label className="w-ful h-full px-10 flex  py-6 justify-between">
            <h1 className="font-semibold md:text-base text-sm">Medium</h1>
            <h1 className="hidden md:flex">Moderate impact, needs attention</h1>
            <input
              className="scale-150 "
              type="radio"
              name="SeverityLevel"
              value="Medium"
              checked={Severity_Level === "Medium"}
              onChange={(e) => setSeverity_Level(e.target.value)}
            />
          </label>
        </div>

        <div className=" cursor-pointer rounded-md ring-1 ring-gray-300">
          <label className="w-ful h-full px-10 flex  py-6 justify-between">
            <h1 className="font-semibold md:text-base text-sm ">High</h1>
            <h1 className="hidden md:flex">Significant impact, urgent</h1>
            <input
              className="scale-150 "
              type="radio"
              name="SeverityLevel"
              value="High"
              checked={Severity_Level === "High"}
              onChange={(e) => setSeverity_Level(e.target.value)}
            />
          </label>
        </div>

        <div className="cursor-pointerrounded-md ring-1 ring-gray-300">
          <label className="w-ful h-full px-10 flex  py-6 justify-between">
            <h1 className="font-semibold  md:text-base text-sm">Critical</h1>
            <h1 className="hidden md:flex">
              Severe impact, immediate action required
            </h1>
            <input
              className="scale-150 "
              type="radio"
              name="SeverityLevel"
              value="Critical"
              checked={Severity_Level === "Critical"}
              onChange={(e) => setSeverity_Level(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="w-full flex justify-between md:px-12 mt-20">
        <Button
          className={"ring-[#01356A] ring-2 text-[#01356A] cursor-pointer"}
          variant={"outline"}
          onClick={() => setPageCount(pageCount - 1)}
        >
          Previous
        </Button>
        <Button
          className={"cursor-pointer"}
          onClick={() => setPageCount(pageCount + 1)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default SeverityLevelForm;
