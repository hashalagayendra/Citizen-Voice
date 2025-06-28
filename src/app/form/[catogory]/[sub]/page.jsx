"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import { useParams } from "next/navigation";
import useGlobalStore from "@/store/useGlobalStore";
import DataFillingForm from "@/components/forms/DataFillingForm";
import SeverityLevelForm from "@/components/forms/SeverityLevelForm";
import ComplaintSubmissionMethodForm from "@/components/forms/ComplaintSubmissionMethodForm";
import ReviewAndSubmitForm from "@/components/forms/ReviewAndSubmitForm";
import catogoryData from "@/lib/details";
import SubmittedCompainsDetals from "@/components/forms/SubmittedCompainsDetals";
export default function Page() {
  const params = useParams();
  const name = params.sub;
  const SelectedcatogoryName = params.catogory;
  const decoded = decodeURIComponent(name);
  console.log(decoded);

  const { pageCount, setpageCount } = useGlobalStore();
  const valid_form = () => {
    switch (pageCount) {
      case 1: {
        return <DataFillingForm></DataFillingForm>;
        break;
      }
      case 2: {
        return <SeverityLevelForm></SeverityLevelForm>;
        break;
      }
      case 3: {
        return <ComplaintSubmissionMethodForm></ComplaintSubmissionMethodForm>;
        break;
      }
      case 4: {
        return <ReviewAndSubmitForm></ReviewAndSubmitForm>;
        break;
      }
      case 5: {
        return <SubmittedCompainsDetals></SubmittedCompainsDetals>;
        break;
      }
    }
  };

  return (
    <div>
      <div className="max-sm:w-full w-10/12 bg-white self-center  rounded-2xl mx-auto my-20">
        <div className=" bg-[#01356A] py-10 px-12 w-full rounded-t-2xl  ">
          <h1 className=" text-white text-xl md:text-2xl font-semibold pb-2">
            {catogoryData[SelectedcatogoryName].title}
          </h1>
          <h1 className="text-gray-400 text-sm md:text-base">
            {catogoryData[SelectedcatogoryName].subTitle}
          </h1>
          <div className="flex justify-between text-white pt-8 font-semibold pb-4 md:text-base text-sm">
            <h1>1 of 5</h1>
            <h1>{(pageCount / 5) * 100}% complete</h1>
          </div>
          <Progress
            value={(100 / 5) * pageCount}
            className="[&>div]:bg-[#FFD21E] bg-white"
          />
        </div>
        {/* <h1>Current Page Count: {pageCount}</h1> */}

        {valid_form()}
      </div>
    </div>
  );
}
