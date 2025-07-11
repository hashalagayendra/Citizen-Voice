"use client";

import MainFormHeadder from "@/components/MainFormHeadder";
import UserDashBoardCompainCard from "@/components/UserDashBoardCompainCard";
import UserDashBoardProgressCard from "@/components/UserDashBoardProgressCard";
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ChatHaddler from "@/components/ChatHaddler";

function page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [responsedata, setresponsedata] = useState();
  const [In_Progress, setIn_Progress] = useState();
  const [chatopen, setChatOpen] = useState(false);

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
                    description={each.description}
                    complainId={each.complainId}
                    createdAt={each.createdAt}
                    C_status={each.C_status}
                    MainTitle={each.MainTitle}
                    SubTitle={each.SubTitle}
                    Location={each.tempory_address}
                    Severity={each.Severity_Level}
                  ></UserDashBoardCompainCard>
                );
              })}
          </div>
        </div>
      </div>
      <ChatHaddler></ChatHaddler>
      {/* Beautiful Chat Open Button */}
    </div>
  );
}

export default page;
