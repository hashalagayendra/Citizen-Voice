"use client";
import React, { useEffect, useState } from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";

function ReviewAndSubmitForm() {
  const [uploadLoarding, setuploadLoarding] = useState(false);
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }
  const params = useParams();
  const SelectedcatogoryName = params.catogory;
  const SubcatogoryName = params.sub;
  const { pageCount, setPageCount } = useGlobalStore();
  const {
    description,
    location_coordinates,
    tempory_address,
    date,
    uploadedImageUrls,
    Severity_Level,
    Submission_Method,
    Any_Witnesses,
    Affected_Area,
    Is_It_Ongoing,
    Person_involved,
    Departments,
    ConstructionType,
    Is_It_Dangerous,
    FacilityType,
    NameOfFacility,
    responseAftersendingData,
    setresponseAftersendingData,
  } = useGlobalStore();

  async function uploaddata() {
    const formdetails = {
      C_status: "In Progress",
      MainTitle: SelectedcatogoryName,
      SubTitle: SubcatogoryName,
      userEmail:
        Submission_Method === "without_id" ? "test@test.test" : session.email,
      ...(description && { description }),
      ...(location_coordinates && { location_coordinates }),
      ...(tempory_address && { tempory_address }),
      ...(date && { date }),
      ...(uploadedImageUrls && { uploadedImageUrls }),
      ...(Severity_Level && { Severity_Level }),
      ...(Submission_Method && { Submission_Method }),
      ...(Any_Witnesses && { Any_Witnesses }),
      ...(Affected_Area && { Affected_Area }),
      ...(Is_It_Ongoing && { Is_It_Ongoing }),
      ...(Person_involved && { Person_involved }),
      ...(Departments && { Departments }),
      ...(ConstructionType && { ConstructionType }),
      ...(Is_It_Dangerous && { Is_It_Dangerous }),
      ...(FacilityType && { FacilityType }),
      ...(NameOfFacility && { NameOfFacility }),
    };

    try {
      const res = await axios.post("/api/uploadData", formdetails);
      // console.log("Response data:", res.data);
      await setresponseAftersendingData(res.data);
      // console.log("Form details:", formdetails);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  }

  return (
    <div className="bg-white w-full px-12 max-sm:px-4 rounded-b-2xl py-6">
      <h1 className="text-xl md:text-2xl text-[#01356A] mb-2 ">
        {" "}
        Review And Submit Form
      </h1>
      <p className="text-gray-400 md:text-base text-sm">
        Please review your submission details before final submission.
      </p>

      <div className="w-full rounded-lg ring-2 ring-gray-400 mt-9  px-6 py-6">
        <h1 className="text-lg font-bold text-[#01356A] mb-6  text-center">
          Complaint Details
        </h1>
        <div className="flex flex-col max-md:gap-1 gap-2">
          <div className="flex hover:bg-blue-100/30 py-2 flex-col items-center rounded">
            <h1 className=" text-gray-600 max-md:text-base text-xl">
              Category
            </h1>
            <h1 className="text-gray-800 max-md:text-sm font-semibold ">
              {SelectedcatogoryName}
            </h1>
          </div>

          <div className="flex hover:bg-blue-100/30 py-2 flex-col items-center  rounded">
            <h1 className=" text-gray-600 text-xl max-md:text-base">
              Sub Category
            </h1>
            <h1 className="text-gray-800 font-semibold max-md:text-sm">
              {SubcatogoryName}
            </h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  flex-col items-center rounded">
            <h1 className=" text-gray-600 text-xl max-md:text-base">
              Description
            </h1>
            <h1 className="text-gray-800 max-md:text-sm ">{description}</h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2 flex-col items-center rounded">
            <h1 className=" text-gray-600 text-xl max-md:text-base">
              Location
            </h1>
            <h1 className="text-gray-800 text-center max-w-2xl  max-md:text-sm ">
              {tempory_address}
            </h1>
          </div>

          <div className="flex hover:bg-blue-100/30 py-2 flex-col items-center rounded">
            <h1 className=" text-gray-600 text-xl max-md:text-base">
              Severity
            </h1>
            <h1 className="text-gray-800  max-md:text-sm">{Severity_Level}</h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2 flex-col items-center rounded">
            <h1 className=" text-gray-600 text-xl max-md:text-base">
              Evidence Files
            </h1>
            <h1 className="text-gray-800  max-md:text-sm">
              {`${
                uploadedImageUrls
                  ? "Number of Files " + uploadedImageUrls.length
                  : "No"
              }`}
            </h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  flex-col items-center rounded">
            <h1 className=" text-gray-600 text-xl max-md:text-base">
              Submission Method
            </h1>
            <h1 className="text-gray-800 max-md:text-sm ">
              {(Submission_Method === "without_id" && "Report Anonimusly") ||
                (Submission_Method === "with_id" && "Report With ID")}
            </h1>
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
        <Button
          onClick={async () => {
            setuploadLoarding(true);
            await uploaddata();
            await setPageCount(pageCount + 1);
            setuploadLoarding(false);
          }}
        >
          {uploadLoarding ? "Wait..." : "Continue"}
        </Button>
      </div>
    </div>
  );
}

export default ReviewAndSubmitForm;
