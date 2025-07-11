import React from "react";

function UserDashBoardCompainCard({
  MainTitle,
  SubTitle,
  Location,
  Severity,
  complainId,
  createdAt,
  C_status,
  description,
}) {
  const [showDetails, setShowDetails] = React.useState(false);
  const date = new Date(createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

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
  return (
    <div className="relative w-full max-w-80 bg-white rounded-xl px-8 py-10 flex h-full flex-col gap-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-[#01356A] text-base tmd:ext-xl font-semibold">
          {createSpecialId(MainTitle, SubTitle, complainId)}
        </h1>
        <div className="px-3 py-1 bg-green-600 rounded-2xl">
          <h1 className="text-xs font-bold text-white">{C_status}</h1>
        </div>
      </div>
      <h1 className="text-gray-500 font-semibold">
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

      {!showDetails && (
        <div className="flex justify-center items-center gap-2 mt-auto">
          <div
            className="bg-[#01356A] py-2 px-4 rounded cursor-pointer"
            onClick={() => setShowDetails(true)}
          >
            <h1 className="text-white">View details</h1>
          </div>
        </div>
      )}

      {showDetails && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col pt-14 p-6 rounded-xl">
          <div
            className="absolute top-4 right-4 bg-[#01356A] py-1 px-3 rounded-full cursor-pointer text-white text-sm"
            onClick={() => setShowDetails(false)}
          >
            Close
          </div>
          <div className="w-full">
            <div className="mb-4">
              <h2 className="font-bold text-lg mb-1 text-[#01356A]">Title</h2>
              <p className="text-left text-gray-700 break-words">{SubTitle}</p>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-1 text-[#01356A]">
                Description
              </h2>
              <p className="text-left text-gray-700 break-words">
                {description ? description : "No description provided."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDashBoardCompainCard;
