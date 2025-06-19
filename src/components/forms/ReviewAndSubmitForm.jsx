"use client";
import React, { useEffect } from "react";
import useGlobalStore from "@/store/useGlobalStore";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";

function ReviewAndSubmitForm() {
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
      MainTitle: SelectedcatogoryName,
      SubTitle: SubcatogoryName,
      userEmail: "test@test.test",
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
            <h1 className="text-gray-800 font-semibold">
              {SelectedcatogoryName}
            </h1>
          </div>

          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Sub Category</h1>
            <h1 className="text-gray-800 font-semibold">{SubcatogoryName}</h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Description</h1>
            <h1 className="text-gray-800 ">{description}</h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Location</h1>
            <h1 className="text-gray-800 ">{tempory_address}</h1>
          </div>

          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Severity</h1>
            <h1 className="text-gray-800 ">{Severity_Level}</h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Evidence Files</h1>
            <h1 className="text-gray-800 ">
              {`${
                uploadedImageUrls
                  ? "Number of Files " + uploadedImageUrls.length
                  : "No"
              }`}
            </h1>
          </div>
          <div className="flex hover:bg-blue-100/30 py-2  rounded">
            <h1 className="w-1/2 text-gray-600">Submission Method</h1>
            <h1 className="text-gray-800 ">
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
            await uploaddata();
            await setPageCount(pageCount + 1);
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default ReviewAndSubmitForm;
