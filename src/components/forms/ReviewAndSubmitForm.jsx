import React from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { Button } from "@/components/ui/button";

function ReviewAndSubmitForm() {
  const { pageCount, setPageCount } = useGlobalStore();

  return (
    <div className="bg-white w-full px-12 rounded-b-2xl py-6">
      <h1 className="text-xl md:text-2xl text-[#01356A] mb-2 ">
        {" "}
        Review And Submit Form
      </h1>
      <p className="text-gray-400 md:text-base text-sm">
        Please review your submission details before final submission.
      </p>

      <div className="w-full rounded-lg ring-2 ring-gray-400 mt-9  px-6 py-6">
        <h1 className="text-lg font-bold text-[#01356A] mb-6 ">
          Complaint Details
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Category</h1>
            <h1 className="text-gray-800 font-semibold">Waste Disposal</h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Description</h1>
            <h1 className="text-gray-800 ">jhbvjhvdsfs</h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Location</h1>
            <h1 className="text-gray-800 ">
              Sample location near Delhi, India
            </h1>
          </div>

          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Severity</h1>
            <h1 className="text-gray-800 ">Low</h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Evidence Files</h1>
            <h1 className="text-gray-800 ">No</h1>
          </div>
        </div>
      </div>

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
  );
}

export default ReviewAndSubmitForm;
