import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import useGlobalStore from "@/store/useGlobalStore";
import { EyeOff } from "lucide-react";

function ComplaintSubmissionMethodForm() {
  const { pageCount, setPageCount } = useGlobalStore();
  const { Submission_Method, setSubmission_Method } = useGlobalStore();

  useEffect(() => {
    console.log(Submission_Method);
  }, [Submission_Method]);
  return (
    <div className="bg-white w-full px-12 max-sm:px-4 rounded-b-2xl py-6">
      <h1 className="text-xl md:text-2xl text-[#01356A]">
        Complaint Submission Method
      </h1>
      <p className="text-gray-400 mt-2 mb-10 md:text-base text-sm">
        Please select your preferred reporting option: anonymous submission or
        identified reporting
      </p>

      <div className="flex flex-col md:flex-row justify-around gap-10 md:gap-0 lg:justify-center lg:gap-16">
        <div
          className={`cursor-pointer md:max-w-xs w-full  flex flex-col items-center justify-between rounded-lg py-4  md:py-10 mr-4 gap-5 ${
            Submission_Method === "with_id"
              ? "bg-blue-100/60 ring-2 ring-blue-700"
              : "bg-blue-100/40"
          }`}
          onClick={() => {
            setSubmission_Method("with_id");
          }}
        >
          <Eye size={50} strokeWidth={1}></Eye>
          <h1 className="text-lg md:text-xl font-semibold text-[#01356A]">
            Report With ID
          </h1>
          <div className="w-10/12 bg-green-100 flex flex-col gap-3 items-center border-l-4 border-green-600 rounded px-4 py-6">
            <p className="text-sm"> Note on Anonymous Reporting</p>
            <p className="text-xs md:text-sm">
              Provide your contact details to receive updates and follow-ups on
              your report. Your information will be kept confidential
            </p>
          </div>
        </div>

        <div
          className={`cursor-pointer md:max-w-xs w-full flex flex-col items-center justify-between rounded-lg py-4  md:py-10 gap-5 ${
            Submission_Method === "without_id"
              ? "bg-blue-100/60 ring-2 ring-blue-700"
              : "bg-blue-100/40"
          }`}
          onClick={() => {
            setSubmission_Method("without_id");
          }}
        >
          <EyeOff size={50} strokeWidth={1}></EyeOff>
          <h1 className="  text-[#01356A] text-lg md:text-xl font-semibold">
            Submit As a anonimusly
          </h1>
          <div className="w-10/12 bg-yellow-200/30 flex flex-col gap-3 items-center border-l-4 border-yellow-400 rounded px-4 py-6">
            <p className="text-sm"> Note on Anonymous Reporting</p>
            <p className="text-xs md:text-sm">
              You will not receive updates on your complaint if you choose to
              remain anonymous. We encourage providing contact information for
              better follow-up.
            </p>
          </div>
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

export default ComplaintSubmissionMethodForm;
