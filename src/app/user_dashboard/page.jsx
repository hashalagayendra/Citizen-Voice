"use client";

import MainFormHeadder from "@/components/MainFormHeadder";
import UserDashBoardCompainCard from "@/components/UserDashBoardCompainCard";
import UserDashBoardProgressCard from "@/components/UserDashBoardProgressCard";
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ChatHaddler from "@/components/ChatHaddler";

function createSpecialId(MainTitle, SubTitle, id) {
  if (!MainTitle || !SubTitle || !id) return "";
  const mainInitials = MainTitle.split("_")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  const subInitials = SubTitle.replace(/([A-Z])/g, " $1")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  return `${mainInitials}_${subInitials}_${id}`;
}

const ProgressTracker = ({ status }) => {
  const progressSteps = [
    "Received",
    "Under Review",
    "Assigned",
    "In Progress",
    "Resolved",
    "Closed",
  ];
  const rejectedSteps = ["Received", "Rejected"];

  const isRejected = status === "Rejected";
  const steps = isRejected ? rejectedSteps : progressSteps;
  const currentStepIndex = steps.indexOf(status);

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div key={step} className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <div
              className={`w-4 h-4 rounded-full ${
                index <= currentStepIndex ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
            {index < steps.length - 1 && (
              <div
                className={`w-0.5 h-8 ${
                  index < currentStepIndex ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
          <div
            className={`-mt-1 ${
              index <= currentStepIndex
                ? "text-gray-800 font-semibold"
                : "text-gray-500"
            }`}
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

function page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [responsedata, setresponsedata] = useState();
  const [In_Progress, setIn_Progress] = useState();
  const [chatopen, setChatOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated") {
        try {
          const res = await axios.post("/api/complainManegment", {
            email: session?.user?.email,
            method: "get_user_all_data",
          });
          setresponsedata(res.data.data);
          console.log(res.data.data.length); // Optional: handle data here
        } catch (err) {
          console.error("API error:", err);
        }
      }
    };

    fetchData();
  }, [status, session]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }

    if (status === "authenticated" && session?.user?.role !== "user") {
      router.push("/admin_dashboard");
    }
  }, [status, router]);

  useEffect(() => {
    if (responsedata) {
      console.log("Updated response data:", responsedata);
    }

    if (responsedata) {
      let count = 0;
      for (const i of responsedata) {
        if (i.C_status === "In Progress") {
          count++;
        }
      }

      setIn_Progress(count);
    }
  }, [responsedata]);

  if (status === "loading") {
    return <p className="text-white text-center">Loading...</p>;
  }

  function cout_of_In_Progress() {
    let count;
    if (responsedata) {
      for (const i of responsedata) {
        if (i.C_status === "In Progress") {
          count++;
        }
      }

      setIn_Progress(count);
    }
  }

  const handleViewDetails = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleCloseModal = () => {
    setSelectedComplaint(null);
  };

  return (
    <div className=" bg-[#01356A]">
      <MainFormHeadder></MainFormHeadder>

      <div className="h-full mt-16 py-7 px-12 max-md:px-0 ">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-white">DashBoard</h1>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-md shadow-md transition-colors duration-300"
          >
            Logout
          </button>
        </div>

        <h1>{responsedata?.MainTitle}</h1>
        <h1 className="text-3xl text-white font-bold my-14 ml-5">
          {responsedata && responsedata.lengths}
        </h1>
        <div className="py-5 px-6 max-sm:px-0 bg-white rounded-2xl ">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
            <UserDashBoardProgressCard
              title={"Total Complaints"}
              number={responsedata && responsedata.length}
              subtitle={"+4 from last month"}
            ></UserDashBoardProgressCard>
            <UserDashBoardProgressCard
              title={"In Progress"}
              number={In_Progress}
              subtitle={"Being investigated"}
            ></UserDashBoardProgressCard>
            <UserDashBoardProgressCard
              title={"Resolved"}
              number={responsedata && responsedata.length - In_Progress}
              subtitle={"Successfully addressed"}
            ></UserDashBoardProgressCard>
          </div>

          <div
            className="w-full bg-[#e5edf6] mt-9 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-0 h-full
            md:px-4 lg:px-0 xl:px-12 sm:place-items-start place-items-center "
          >
            {responsedata &&
              responsedata.map((each) => {
                return (
                  <UserDashBoardCompainCard
                    key={each.complainId}
                    description={each.description}
                    complainId={each.complainId}
                    createdAt={each.createdAt}
                    C_status={each.C_status}
                    MainTitle={each.MainTitle}
                    SubTitle={each.SubTitle}
                    Location={each.tempory_address}
                    Severity={each.Severity_Level}
                    onViewDetails={() => handleViewDetails(each)}
                  ></UserDashBoardCompainCard>
                );
              })}
          </div>
        </div>
      </div>
      <ChatHaddler></ChatHaddler>
      {/* Beautiful Chat Open Button */}

      {selectedComplaint && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col transform scale-95 transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-start mb-6 pb-4 border-b">
              <div>
                <h2 className="font-bold text-2xl text-[#01356A]">
                  Complaint Details
                </h2>
                <p className="text-sm text-gray-500 font-mono">
                  {createSpecialId(
                    selectedComplaint.MainTitle,
                    selectedComplaint.SubTitle,
                    selectedComplaint.complainId
                  )}
                </p>
              </div>
              <button
                className="bg-gray-200 hover:bg-gray-300 transition-colors duration-300 py-2 px-4 rounded-lg text-gray-700 text-base font-semibold"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
            <div className="overflow-y-auto pr-2 -mr-4 flex-grow">
              <div className="space-y-6">
                {/* Top Section for Details */}
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#01356A]">
                    {selectedComplaint.SubTitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 text-sm pb-4 border-b">
                    <div>
                      <h4 className="font-semibold text-gray-500">Category</h4>
                      <p className="text-gray-800">
                        {selectedComplaint.MainTitle}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">Severity</h4>
                      <p className="text-gray-800">
                        {selectedComplaint.Severity_Level}
                      </p>
                    </div>
                    <div className="sm:col-span-1">
                      <h4 className="font-semibold text-gray-500">Location</h4>
                      <p className="text-gray-800 break-words">
                        {selectedComplaint.Location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section for Description and Progress */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#01356A]">
                      Description
                    </h3>
                    <p className="text-left text-gray-800 break-words text-sm leading-relaxed">
                      {selectedComplaint.description ||
                        "No description provided."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#01356A]">
                      Progress
                    </h3>
                    <ProgressTracker status={selectedComplaint.C_status} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
