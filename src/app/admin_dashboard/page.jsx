import React from "react";
import ChatHaddler from "@/components/ChatHaddler";
import MainFormHeadder from "@/components/MainFormHeadder";
import AdminChat from "./AdminChat";

function page() {
  return (
    <div className=" bg-[#01356A]">
      <MainFormHeadder></MainFormHeadder>
      <div className="h-full mt-16 py-7 px-12 md:px-0 lg:px-12">
        <AdminChat />
      </div>
    </div>
  );
}

export default page;
