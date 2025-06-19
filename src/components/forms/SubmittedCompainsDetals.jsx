import React from "react";
import Link from "next/link";
import catogoryData from "@/lib/details";
import { Button } from "@/components/ui/button";
import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";

import Done from "@/assests/done.png";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ComplaintReceiptPDF from "@/components/PDF";

import { useParams } from "next/navigation";
function SubmittedCompainsDetals() {
  const { pageCount, setPageCount, responseAftersendingData } =
    useGlobalStore();
  const params = useParams();
  const main = params.catogory;
  const sub = params.sub;

  // console.log(catogoryData[main]);

  const dummyData = {
    complaintId: responseAftersendingData.data.complainId,
    date: responseAftersendingData.data.complainId
      ? responseAftersendingData.data.date
      : "sds",
    category: responseAftersendingData.data.MainTitle,
    subCategory: responseAftersendingData.data.SubTitle,
    status: "Resolved",
  };

  useEffect(() => {
    // const data = responseAftersendingData;
    console.log(responseAftersendingData.data.complainId);
  }, [responseAftersendingData]);

  return (
    <div>
      <div className="bg-white w-full px-12 rounded-b-2xl py-6">
        <div className="w-full h-full  flex flex-col justify-center items-center gap-7 ">
          <img src={Done.src} alt="" className="h-32" />
          <h1 className="text-3xl text-[#01356A] font-semibold text-center">
            Complaint Submitted Successfully!
          </h1>
          <p className="w-full max-w-[500px] text-center text-gray-400 ">
            Thank you for reporting the environmental issue. Your complaint has
            been registered and will be addressed by our team.
          </p>

          <div>
            <h1 className="text-center text-xl text-gray-400">Complaint ID</h1>
            <h1 className="text-center text-xl text-[#01356A] font-semibold ">
              EPA-743185
            </h1>
          </div>
          <div>
            <h1 className="text-center text-gray-400 text-lg">
              Submission Date
            </h1>
            <h1 className="text-center text-gray-400 text-lg">5/8/2025</h1>
          </div>

          <div>
            <h1 className="text-center text-gray-400 text-lg">Status</h1>
            <h1 className="text-center text-green-500 text-lg">Resived</h1>
          </div>
        </div>

        <div className="w-full flex justify-center md:gap-10 lg:gap-20 md:px-12 my-10 md:flex-row flex-col gap-5 items-center">
          <PDFDownloadLink
            document={<ComplaintReceiptPDF data={dummyData} />}
            fileName="complaint-receipt.pdf"
          >
            <div className="px-4 py-3  ring-2 ring-[#01356A] rounded w-fit">
              <h1 className="text-[#01356A] font-semibold">Download Receipt</h1>
            </div>
          </PDFDownloadLink>

          <div className="px-4 py-3  ring-2 ring-[#01356A] bg-[#01356A] rounded w-fit">
            <h1 className="text-white font-semibold">Report Similar Issue</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmittedCompainsDetals;
