"use client";
import React from "react";
import ChatHaddler from "@/components/ChatHaddler";
import MainFormHeadder from "@/components/MainFormHeadder";
import AdminChat from "@/components/AdminChat";
import AdminDashboardCardDemo from "@/components/AdminDashboardCardDemo";
import axios from "axios";
import ComplainCard from "@/components/ComplainCard";
import AdminDashboardCard from "@/components/ComplainCard";
import { useState } from "react";
import catogoryData from "@/lib/details";
import { use } from "react";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const { data: session, status } = useSession();

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
      <div className="   min-h-dvh pt-28 px-12 md:px-0 lg:px-12 bg-[#01356A]">
        <h1 className="text-3xl font-semibold text-white">DashBoard</h1>
        <div
          onClick={signOut}
          className="cursor-pointer py-2 px-5 rounded-md text-white font-semibold bg-red-500 absolute top-17
                 right-8"
        >
          {" "}
          Logout
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

              <div className="w-full flex flex-col gap-5 mt-6 px-5">
                {ComplainCardDetails.length > 0 &&
                  ComplainCardDetails.map((data, index) => (
                    <AdminDashboardCard key={index} data={data} />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
