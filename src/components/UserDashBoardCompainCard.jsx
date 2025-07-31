import React from "react";

// Moved createSpecialId outside the component as it's a pure function
function createSpecialId(MainTitle, SubTitle, id) {
  // Extract capital letters from MainTitle
  const mainInitials = MainTitle.split("_")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  // Extract capital letters from SubTitle
  const subInitials = SubTitle.replace(/([A-Z])/g, " $1") // Split camelCase
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  // Combine components
  return `${mainInitials}_${subInitials}_${id}`;
}

function UserDashBoardCompainCard({
  MainTitle,
  SubTitle,
  Location,
  Severity,
  complainId,
  createdAt,
  C_status,
  description,
  onViewDetails,
}) {
  const date = new Date(createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="relative w-full max-w-sm bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex h-full flex-col gap-4">
      <div className="flex items-start justify-between ">
        <h1 className="text-[#01356A] text-base tmd:text-xl font-semibold pr-2">
          {createSpecialId(MainTitle, SubTitle, complainId)}
        </h1>
        <div className="px-3 py-1 bg-green-600 rounded-full text-center flex-shrink-0">
          <h1 className="text-xs font-bold text-white">{C_status}</h1>
        </div>
      </div>
      <h1 className="text-gray-500 font-semibold text-sm">
        {date.toLocaleString("en-US", options)}
      </h1>
      <div className="flex flex-col gap-4 border-t pt-4">
        <div>
          <h1 className="font-semibold text-gray-400 text-xs">Category</h1>
          <h1 className="text-sm font-medium text-gray-800">{MainTitle}</h1>
        </div>

        <div>
          <h1 className="font-semibold text-gray-400 text-xs">Title</h1>
          <p className="text-sm font-medium text-gray-800 break-words">
            {SubTitle}
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-gray-400 text-xs">Location</h1>
          <p className="text-sm font-medium text-gray-800 break-words">
            {Location}
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-gray-400 text-xs">Severity</h1>
          <h1 className="font-medium text-gray-800">{Severity}</h1>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-auto pt-4">
        <button
          className="bg-[#01356A] hover:bg-blue-900 transition-colors duration-300 py-2 px-5 rounded-lg text-white font-semibold"
          onClick={onViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default UserDashBoardCompainCard;
