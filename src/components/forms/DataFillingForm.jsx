import React from "react";

import { Button } from "@/components/ui/button";
import useGlobalStore from "@/store/useGlobalStore";
import DiscrptionInput from "@/components/inputs/DiscrptionInput";
import MapSelection from "@/components/inputs/MapSelection";
import DatePicker from "../inputs/DatePicker";
import DropBox from "../inputs/DropBox";

function DataFillingForm() {
  const { pageCount, setPageCount } = useGlobalStore();
  return (
    <div>
      <div className="bg-white w-full px-12 rounded-b-2xl py-6">
        <h1 className="text-xl text-[#01356A] mb-6 font-bold">
          Provide details about the issue
        </h1>
        <DiscrptionInput></DiscrptionInput>
        <MapSelection></MapSelection>
        <DatePicker></DatePicker>
        <DropBox></DropBox>

        <div className="w-full flex justify-between md:px-12 mt-20">
          <Button
            className={"ring-[#01356A] ring-2 text-[#01356A]"}
            variant={"outline"}
            onClick={() => setPageCount(pageCount - 1)}
          >
            Previous
          </Button>
          <Button onClick={() => setPageCount(pageCount + 1)}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default DataFillingForm;
