import React from "react";

function UserDashBoardCompainCard({ MainTitle, SubTitle, Location, Severity }) {
  return (
    <div className=" w-full max-w-80   bg-white rounded-xl px-8 py-10 flex flex-col gap-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-[#01356A] text-xl font-semibold">ECO-2023-001</h1>
        <div className="px-3 py-1 bg-green-600 rounded-2xl">
          <h1 className="text-xs font-bold text-white">Resolved</h1>
        </div>
      </div>
      <h1 className="text-gray-500 font-semibold">2023-10-15</h1>

      <div className="flex flex-col    gap-4  ">
        <div className="flex  justify-between flex-col items-center gap-2">
          <h1 className="font-semibold">Catogory</h1>
          <h1 className="text-sm">{MainTitle}</h1>
        </div>

        <div className="flex  justify-between flex-col items-center gap-2">
          <h1 className="font-semibold">Title</h1>
          <h1 className="text-sm">{SubTitle}</h1>
        </div>

        <div className="flex  justify-between flex-col items-center gap-2">
          <h1 className="font-semibold">Location</h1>
          <h1 className="text-sm text-center">{Location}</h1>
        </div>

        <div className="flex  justify-between flex-col items-center gap-2">
          <h1 className="font-semibold">Severity</h1>
          <h1>{Severity}</h1>
        </div>
      </div>

      <div className="flex  justify-between flex-col items-center gap-2">
        <div className="bg-[#01356A] py-2 px-4 rounded">
          <h1 className="text-white">View details</h1>
        </div>
      </div>
    </div>
  );
}

export default UserDashBoardCompainCard;
