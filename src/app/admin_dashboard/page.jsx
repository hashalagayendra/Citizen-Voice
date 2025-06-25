import React from "react";
import ChatHaddler from "@/components/ChatHaddler";
import MainFormHeadder from "@/components/MainFormHeadder";
import AdminChat from "@/components/AdminChat";
import AdminDashboardCardDemo from "@/components/AdminDashboardCardDemo";

function page() {
  return (
    <div className=" bg-[#01356A]">
      <MainFormHeadder></MainFormHeadder>
      <div className="   min-h-dvh pt-28 px-12 md:px-0 lg:px-12 bg-[#01356A]">
        {/* <AdminChat /> */}

        <h1 className="text-3xl font-semibold text-white">DashBoard</h1>
        <div className="w-full gap-10 flex mt-8  rounded-3xl shadow-2xl  mb-4">
          <div className="py-3 px-5 bg-white w-fit rounded-md">
            <h1 className="text-lg font-semibold text-[#01356A]">
              Chat with user
            </h1>
          </div>
          <div className="py-3 px-5 bg-white w-fit rounded-md">
            <h1 className="text-lg font-semibold text-[#01356A]">
              Browse Complains
            </h1>
          </div>
        </div>
        <div className="w-full  bg-white rounded-3xl shadow-2xl  border-4 border-[#01356A] mt-8W">
          <div className="w-full py-3 flex justify-around items-center">
            <h1 className="bg-blue-200 py-2 rounded-md px-5">
              Search by Catogory
            </h1>
            <h1 className="bg-blue-200 py-2 rounded-md px-5">
              Search by Catogory
            </h1>
            <h1 className="bg-blue-200 py-2 rounded-md px-5">
              Search by Catogory
            </h1>
          </div>
          <div className="w-full flex flex-col gap-5 mt-6 px-5">
            <AdminDashboardCardDemo></AdminDashboardCardDemo>
            <AdminDashboardCardDemo></AdminDashboardCardDemo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
