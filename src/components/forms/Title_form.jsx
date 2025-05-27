"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import TitleComponet from "@/components/TitleComponet";
import useGlobalStore from "@/store/useGlobalStore";

function Title_form() {
  const { pageCount, setPageCount } = useGlobalStore();

  return (
    <div>
      <div className="bg-white w-full px-12 rounded-b-2xl py-6">
        <h1 className="text-xl md:text-2xl  text-[#01356A] mb-2 ">
          What type of issue would you like to report?
        </h1>
        <h1 className="text-gray-400  text-xs md:text-base">
          Select a category that best describes the environmental issue you want
          to report.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mt-10 gap-5 ">
          <TitleComponet />
          <TitleComponet />
          <TitleComponet />
          <TitleComponet />
          <TitleComponet />
        </div>

        <div className="w-full flex justify-center mt-8 md:text-base text-xs">
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

export default Title_form;
