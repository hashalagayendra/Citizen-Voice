import MainFormHeadder from "@/components/MainFormHeadder";
import UserDashBoardCompainCard from "@/components/UserDashBoardCompainCard";
import UserDashBoardProgressCard from "@/components/UserDashBoardProgressCard";
import React from "react";

function page() {
  return (
    <div className=" bg-[#01356A]">
      <MainFormHeadder></MainFormHeadder>
      <div className="h-full mt-16 py-7 px-12 md:px-0 lg:px-12">
        <h1 className="text-3xl text-white font-bold my-14 ml-5">DashBoard</h1>
        <div className="py-5 px-6 bg-white rounded-2xl ">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
            <UserDashBoardProgressCard
              title={"Total Complaints"}
              number={23}
              subtitle={"+4 from last month"}
            ></UserDashBoardProgressCard>
            <UserDashBoardProgressCard
              title={"In Progress"}
              number={23}
              subtitle={"Being investigated"}
            ></UserDashBoardProgressCard>
            <UserDashBoardProgressCard
              title={"Resolved"}
              number={13}
              subtitle={"Successfully addressed"}
            ></UserDashBoardProgressCard>
          </div>

          <div className="w-full bg-[#e5edf6] mt-9 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-8  md:px-12 lg:px-6 xl:px-12 place-items-center ">
            <UserDashBoardCompainCard></UserDashBoardCompainCard>
            <UserDashBoardCompainCard></UserDashBoardCompainCard>
            <UserDashBoardCompainCard></UserDashBoardCompainCard>
            <UserDashBoardCompainCard></UserDashBoardCompainCard>
            <UserDashBoardCompainCard></UserDashBoardCompainCard>
            <UserDashBoardCompainCard></UserDashBoardCompainCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
