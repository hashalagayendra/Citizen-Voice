"use client";

import { Progress } from "@/components/ui/progress";
import { usePathname } from "next/navigation";

import DataFillingForm from "@/components/forms/DataFillingForm";
import SeverityLevelForm from "@/components/forms/SeverityLevelForm";
import ComplaintSubmissionMethodForm from "@/components/forms/ComplaintSubmissionMethodForm";
import ReviewAndSubmitForm from "@/components/forms/ReviewAndSubmitForm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TitleComponet from "@/components/TitleComponet";
import useGlobalStore from "@/store/useGlobalStore";
import { useParams } from "next/navigation";
import catogoryData from "@/lib/details";

function page() {
  const { pageCount, setPageCount } = useGlobalStore();
  const [navigateURL, setnavigateURL] = useState(null);
  const params = useParams();
  const SelectedcatogoryName = params.catogory;

  // console.log(SelectedcatogoryName);
  // console.log(catogoryData[SelectedcatogoryName].title);

  useEffect(() => {
    console.log(navigateURL);
  }, [navigateURL]);

  // dont remove this
  useEffect(() => {
    setPageCount(1);
  }, []);

  return (
    <div>
      <div className="w-10/12 bg-white self-center  rounded-2xl mx-auto my-20">
        <div className=" bg-[#01356A] py-10 px-12 w-full rounded-t-2xl  ">
          <h1 className=" text-white text-xl md:text-2xl font-semibold pb-2">
            {catogoryData[SelectedcatogoryName].title}
          </h1>
          <h1 className="text-gray-400 text-sm md:text-base">
            {catogoryData[SelectedcatogoryName].subTitle}
          </h1>
          <div className="flex justify-between text-white pt-8 font-semibold pb-4 md:text-base text-sm">
            <h1>1 of 5</h1>
            <h1>{0}% complete</h1>
          </div>
          <Progress
            value={(100 / 5) * (pageCount - 1)}
            className="[&>div]:bg-[#FFD21E] bg-white"
          />
        </div>
        <h1>Current Page Count: {pageCount}</h1>
        <div>
          <div className="bg-white w-full px-12 rounded-b-2xl py-6">
            <h1 className="text-xl md:text-2xl  text-[#01356A] mb-2 ">
              What type of issue would you like to report?
            </h1>
            <h1 className="text-gray-400  text-xs md:text-base">
              {catogoryData[SelectedcatogoryName].thirdTitle}
            </h1>

            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4  mt-10 gap-3 ">
              {catogoryData[SelectedcatogoryName].subCatogoris.map(
                (each, index) => (
                  <TitleComponet
                    navigateURL={navigateURL}
                    key={index}
                    id={each.id}
                    Icon={each.Icon}
                    Title={each.title}
                    subtitle={each.subTitle}
                    setnavigateURL={setnavigateURL}
                  />
                )
              )}
            </div>

            <div className="w-full flex justify-center mt-8 md:text-base text-xs">
              <div className={`${!navigateURL && "disabled:"} `}>
                {" "}
                <Link
                  href={`/form/${SelectedcatogoryName}/${
                    navigateURL ? navigateURL : ""
                  }`}
                >
                  {" "}
                  <Button
                    className={"md:text-base text-sm"}
                    // onClick={() => setPageCount(pageCount + 1)}
                  >
                    Continue
                  </Button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
