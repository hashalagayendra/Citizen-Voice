import React from "react";
import TitleComponet from "@/components/TitleComponet";
import { Button } from "@/components/ui/button";
import useGlobalStore from "@/store/useGlobalStore";
function DataFillingForm() {
  const { pageCount, setPageCount } = useGlobalStore();
  return (
    <div>
      <div className="bg-white w-full px-12 rounded-b-2xl py-6">
        <h1 className="text-2xl text-[#01356A] mb-4 font-semibold">
          What type of issue would you like to report?
        </h1>
        <h1 className="text-gray-400">
          Select a category that best describes the environmental issue you want
          to report.
        </h1>

        <div className="grid grid-cols-4 gap-9 mt-14">
          <TitleComponet />
          <TitleComponet />
          <TitleComponet />
          <TitleComponet />
          <TitleComponet />
        </div>

        <div className="w-full flex justify-center">
          <Button onClick={() => setPageCount(pageCount + 1)}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default DataFillingForm;
