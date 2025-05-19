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
        <h1 className="text-xl  text-[#01356A] mb-2 font-bold">
          What type of issue would you like to report?
        </h1>
        <h1 className="text-gray-400">
          Select a category that best describes the environmental issue you want
          to report.
        </h1>

        <div className="grid grid-cols-4 gap-9 mt-10">
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

export default Title_form;
