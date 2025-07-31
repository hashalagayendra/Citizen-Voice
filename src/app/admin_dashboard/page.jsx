"use client";
import React from "react";
import ChatHaddler from "@/components/ChatHaddler";
import MainFormHeadder from "@/components/MainFormHeadder";
import AdminChat from "@/components/AdminChat";
import axios from "axios";
import ComplainCard from "@/components/ComplainCard";
import { useState } from "react";
import catogoryData from "@/lib/details";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const ComplainSummaryCard = ({ data, onClick, statusColors }) => (
  <div
    onClick={onClick}
    className="cursor-pointer p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
  >
    <div className="flex justify-between items-start gap-4">
      <h3 className="font-bold text-lg text-[#01356A] truncate pr-2">
        {data.MainTitle || "No Title"}
      </h3>
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
          statusColors[data.C_status] || "bg-gray-200 text-gray-700"
        }`}
      >
        {data.C_status || "Unknown"}
      </span>
    </div>
    <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
      <p className="truncate pr-4">{data.SubTitle || "No Sub-title"}</p>
      <p className="flex-shrink-0">
        {new Date(data.createdAt).toLocaleDateString()}
      </p>
    </div>
  </div>
);

function page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [selectedComplain, setSelectedComplain] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }

    if (status === "authenticated" && session?.user?.role !== "admin") {
      router.push("/user_dashboard");
    }
  }, [status, router]);

  console.log(catogoryData.Environmental_Hazards.title);
  const [OpenCompainview, setOpenCompainview] = useState(true);
  const [ComplainCardDetails, setComplainCardDetails] = useState([]);
  const [OpenSearchByCatogory, setOpenSearchByCatogory] = useState(false);
  const [OpenSearchBySubCatogory, setOpenSearchBySubCatogory] = useState(false);
  const [OpenSearchBySeverity_Level, setOpenSearchBySeverity_Level] =
    useState(false);
  async function getComplainsDataWithMainTitle(MainTitle) {
    try {
      const compains = await axios.post("/api/adminActions", {
        action: "Search_by_Catogory",
        MainTitle: MainTitle,
      });
      setComplainCardDetails(compains.data.data);
      // console.log(compains.data.data);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  }

  async function getComplainsDataWithSubTitle(SubTitle) {
    try {
      const compains = await axios.post("/api/adminActions", {
        action: "Search_by_Sub_Catogory",
        SubTitle: SubTitle,
      });
      setComplainCardDetails(compains.data.data);
      // console.log(compains.data.data);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  }

  async function getComplainsDataWithSeverity_Level(Severity_Level) {
    try {
      const compains = await axios.post("/api/adminActions", {
        action: "Search_by_Severity_Level",
        Severity_Level: Severity_Level,
      });
      setComplainCardDetails(compains.data.data);
      // console.log(compains.data.data);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  }

  const statusColors = {
    Received: "bg-blue-100 text-blue-700",
    "Under Review": "bg-orange-100 text-orange-700",
    Assigned: "bg-purple-100 text-purple-700",
    "In Progress": "bg-cyan-100 text-cyan-700",
    Resolved: "bg-green-100 text-green-700",
    Closed: "bg-gray-100 text-gray-700",
    Rejected: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const compains = await axios.get("/api/adminActions");
        if (isMounted) {
          setComplainCardDetails(compains.data.data);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [OpenCompainview]);

  return (
    <div className=" bg-[#01356A]">
      <MainFormHeadder></MainFormHeadder>
      <div className="   min-h-dvh pt-28 px-12 md:px-0 lg:px-12 bg-[#01356A] relative">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-white">DashBoard</h1>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-md shadow-md transition-colors duration-300"
          >
            Logout
          </button>
        </div>

        <div className="w-full gap-10 flex mt-8  rounded-3xl shadow-2xl  mb-4">
          <div
            onClick={() => {
              setOpenCompainview(false);
            }}
            className="py-3 px-5 bg-white w-fit rounded-md"
          >
            <h1 className="text-lg font-semibold text-[#01356A]">
              Chat with user
            </h1>
          </div>
          <div
            onClick={() => {
              setOpenCompainview(true);
            }}
            className="py-3 px-5 bg-white w-fit rounded-md"
          >
            <h1 className="text-lg font-semibold text-[#01356A]">
              Browse Complains
            </h1>
          </div>
        </div>
        <div className="w-full  bg-white rounded-3xl shadow-2xl  border-4 border-[#01356A] mt-8W">
          {!OpenCompainview && <AdminChat></AdminChat>}
          {OpenCompainview && (
            <>
              <div className="w-full py-3 flex justify-around items-center relative">
                <div className="bg-blue-200 py-2 rounded-md px-5 relative">
                  <h1
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenSearchByCatogory((pre) => !pre);
                    }}
                  >
                    Search by Catogory
                  </h1>
                  <div
                    className={`flex flex-col  absolute  w-full top-full h-fit py-3 left-0 text-center bg-gray-100
                 ${OpenSearchByCatogory ? "block" : "hidden"}`}
                  >
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer"
                      onClick={() => {
                        getComplainsDataWithMainTitle("Environmental_Hazards");
                        setOpenSearchByCatogory(false);
                      }}
                    >
                      Environmental Hazards
                    </h1>
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer"
                      onClick={() => {
                        getComplainsDataWithMainTitle("Poor_Public_Services");
                        setOpenSearchByCatogory(false);
                      }}
                    >
                      Poor Public Services
                    </h1>
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer "
                      onClick={() => {
                        getComplainsDataWithMainTitle(
                          "Public_Employee_Misconduct"
                        );
                        setOpenSearchByCatogory(false);
                      }}
                    >
                      Public Employee Misconduct
                    </h1>
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer "
                      onClick={() => {
                        getComplainsDataWithMainTitle("Corruption_&_Bribery");
                        setOpenSearchByCatogory(false);
                      }}
                    >
                      Corruption & Bribery
                    </h1>
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer "
                      onClick={() => {
                        getComplainsDataWithMainTitle("Illegal_Constructions");
                        setOpenSearchByCatogory(false);
                      }}
                    >
                      Illegal Constructions
                    </h1>
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer "
                      onClick={() => {
                        getComplainsDataWithMainTitle("Infrastructure_Issues");
                        setOpenSearchByCatogory(false);
                      }}
                    >
                      Infrastructure Issues
                    </h1>
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer "
                      onClick={() => {
                        getComplainsDataWithMainTitle("Crime_Reporting");
                        setOpenSearchByCatogory(false);
                      }}
                    >
                      Crime Reporting
                    </h1>
                  </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="bg-blue-200 py-2 rounded-md px-5 relative">
                  <h1
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenSearchBySubCatogory((pre) => !pre);
                    }}
                  >
                    Search by Sub Catogory
                  </h1>
                  <div
                    className={`flex flex-col overflow-y-scroll  h-72 absolute  w-full top-full  py-3 left-0 text-center bg-gray-100
                 ${OpenSearchBySubCatogory ? "block" : "hidden"}`}
                  >
                    {Object.entries(catogoryData).map(
                      ([mainKey, mainValue]) => (
                        <div key={mainKey}>
                          <ul>
                            {mainValue.subCatogoris.map((sub) => (
                              <h1
                                key={sub.id}
                                className="w-full hover:bg-blue-200 py-2 cursor-pointer"
                                onClick={() => {
                                  getComplainsDataWithSubTitle(sub.id);
                                  setOpenSearchBySubCatogory(false);
                                }}
                              >
                                {sub.title}
                              </h1>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
                {/* ----------------------------------------- */}
                <div className="bg-blue-200 py-2 rounded-md px-5 relative">
                  <h1
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenSearchBySeverity_Level((pre) => !pre);
                    }}
                  >
                    sort by severity
                  </h1>
                  <div
                    className={`flex flex-col  absolute  w-full top-full h-fit py-3 left-0 text-center bg-gray-100
                 ${OpenSearchBySeverity_Level ? "block" : "hidden"}`}
                  >
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer"
                      onClick={() => {
                        getComplainsDataWithSeverity_Level("Critical");
                        setOpenSearchBySeverity_Level(false);
                      }}
                    >
                      Critical
                    </h1>
                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer"
                      onClick={() => {
                        getComplainsDataWithSeverity_Level("High");
                        setOpenSearchBySeverity_Level(false);
                      }}
                    >
                      High
                    </h1>

                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer"
                      onClick={() => {
                        getComplainsDataWithSeverity_Level("Medium");
                        setOpenSearchBySeverity_Level(false);
                      }}
                    >
                      Medium
                    </h1>

                    <h1
                      className="w-full hover:bg-blue-200 py-2 cursor-pointer"
                      onClick={() => {
                        getComplainsDataWithSeverity_Level("Low");
                        setOpenSearchBySeverity_Level(false);
                      }}
                    >
                      Low
                    </h1>
                  </div>
                </div>
              </div>

              <hr className="w-full h-.5 my-4 bg-[#01356A]" />

              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 px-5 pb-6">
                {ComplainCardDetails.length > 0 ? (
                  ComplainCardDetails.map((data, index) => (
                    <ComplainSummaryCard
                      key={index}
                      data={data}
                      statusColors={statusColors}
                      onClick={() => setSelectedComplain(data)}
                    />
                  ))
                ) : (
                  <p className="text-center text-gray-500 col-span-full">
                    No complaints found.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      {selectedComplain && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
          onClick={() => setSelectedComplain(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ComplainCard data={selectedComplain} />
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
