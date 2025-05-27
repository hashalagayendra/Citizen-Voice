import React from "react";
import Link from "next/link";
import catogoryData from "@/lib/details";
import { Button } from "@/components/ui/button";
import useGlobalStore from "@/store/useGlobalStore";

import DiscrptionInput from "@/components/inputs/DiscrptionInput";
import MapSelection from "@/components/inputs/MapSelection";
import DatePicker from "@/components/inputs/DatePicker";
import FileDropBox from "@/components/inputs/FileDropBox";
import AnyWitnesses from "@/components/inputs/AnyWitnesses";
import AffectedAreaSize from "@/components/inputs/AffectedAreaSize";
import IsItOngoing from "@/components/inputs/IsItOngoing";
import PersonInvolved from "@/components/inputs/PersonInvolved";
import DepartmentSelection from "@/components/inputs/DepartmentSelection";
import ConstructionTypeSelection from "@/components/inputs/ConstructionTypeSelection";
import IsItCurrentlyDangerous from "@/components/inputs/IsItCurrentlyDangerous";
import FacilityTypeSetector from "@/components/inputs/FacilityTypeSetector";
import NameOfFacility from "@/components/inputs/NameOfFacility";

import { useParams } from "next/navigation";
function DataFillingForm() {
  const { pageCount, setPageCount } = useGlobalStore();
  const params = useParams();
  const main = params.catogory;
  const sub = params.sub;

  console.log(catogoryData[main]);

  return (
    <div>
      <div className="bg-white w-full px-12 rounded-b-2xl py-6">
        <h1 className="text-xl md:text-2xl text-[#01356A] mb-6 ">
          Provide details about the issue
        </h1>
        <div className="flex flex-col gap-6">
          {/* <DiscrptionInput></DiscrptionInput>
          <PersonInvolved></PersonInvolved>
          <IsItOngoing></IsItOngoing>
          <AffectedAreaSize></AffectedAreaSize>
          <MapSelection></MapSelection>
          <DatePicker></DatePicker>
          <AnyWitnesses></AnyWitnesses>
          <DepartmentSelection></DepartmentSelection>
          <ConstructionTypeSelection></ConstructionTypeSelection>
          <IsItCurrentlyDangerous></IsItCurrentlyDangerous>
          <FacilityTypeSetector></FacilityTypeSetector>
          <NameOfFacility></NameOfFacility>
          <FileDropBox></FileDropBox> */}

          {catogoryData[main].subCatogoris.map((each) => {
            if (each.id === sub) {
              return each.elements.map((Each, index) => (
                <Each key={index}></Each>
              ));
            }
          })}
        </div>

        <div className="w-full flex justify-between md:px-12 mt-20">
          <Link href={"./"}>
            <Button
              className={
                "ring-[#01356A] ring-2 text-[#01356A] md:text-base text-sm"
              }
              variant={"outline"}
            >
              Previous
            </Button>
          </Link>

          <Button
            className={"md:text-base text-sm"}
            onClick={() => setPageCount(pageCount + 1)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataFillingForm;
