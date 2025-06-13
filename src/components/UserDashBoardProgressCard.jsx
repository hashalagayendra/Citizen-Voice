import React from "react";

function UserDashBoardProgressCard({ title, number, subtitle }) {
  return (
    <div className="bg-[#e5edf6] w-full py-3 px-6 lg:px-16 rounded-xl flex flex-col gap-1 sm:text-start text-center">
      <h1 className="text-gray-600 text-lg lg:text-xl">{title}</h1>
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">{number}</h1>
      <h1>{subtitle}</h1>
    </div>
  );
}

export default UserDashBoardProgressCard;
