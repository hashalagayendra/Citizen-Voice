"use client";
import React, { useState } from "react";
import axios from "axios";

const InfoRow = ({ label, value }) => (
  <div className="flex items-start gap-2">
    <span className="font-semibold text-gray-600 w-28 flex-shrink-0">
      {label}:
    </span>
    <span
      className="text-gray-800"
      title={typeof value === "string" ? value : undefined}
    >
      {value}
    </span>
  </div>
);

const StatusTimeline = ({
  statuses,
  currentStatus,
  onStatusSelect,
  isUpdating,
}) => {
  const currentIndex = statuses.indexOf(currentStatus);

  return (
    <div>
      <h3 className="text-lg font-bold text-[#01356A] mb-4">Progress</h3>
      <div className="relative flex flex-col gap-4">
        {/* Vertical line */}
        <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-200"></div>
        {statuses.map((status, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isActive = index <= currentIndex;

          return (
            <button
              key={status}
              onClick={() => onStatusSelect(status)}
              disabled={isUpdating}
              className="relative flex items-center gap-4 text-left w-full disabled:cursor-not-allowed group"
            >
              <div
                className={`w-5 h-5 rounded-full z-10 transition-all ${
                  isActive
                    ? "bg-green-500 group-hover:ring-green-200"
                    : "bg-gray-300 group-hover:ring-gray-200"
                } ${isUpdating ? "" : "group-hover:ring-4"} flex-shrink-0`}
              >
                {isCompleted && (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </div>
              <span
                className={`font-medium transition-colors ${
                  isActive ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {status}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const ComplainCard = ({ data }) => {
  const [modalImg, setModalImg] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState({ type: "", text: "" });
  const [currentStatus, setCurrentStatus] = useState(data.C_status);

  const timelineStatuses = [
    "Received",
    "Under Review",
    "Assigned",
    "In Progress",
    "Resolved",
    "Closed",
  ];

  // All possible statuses, including edge cases, for the badge
  const statusColors = {
    Received: "bg-blue-100 text-blue-700",
    "Under Review": "bg-orange-100 text-orange-700",
    Assigned: "bg-purple-100 text-purple-700",
    "In Progress": "bg-cyan-100 text-cyan-700",
    Resolved: "bg-green-100 text-green-700",
    Closed: "bg-gray-100 text-gray-700",
    Rejected: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700", // Kept for backward compatibility
  };

  const handleUpdateStatus = async (newStatus) => {
    if (newStatus === currentStatus) return; // No change

    setIsUpdating(true);
    setUpdateMessage({ type: "", text: "" });
    try {
      const response = await axios.post("/api/setStatus", {
        action: "Update_Status",
        id: data.complainId,
        newStatus: newStatus,
      });

      const result = response.data;
      if (result.success) {
        setCurrentStatus(newStatus);
        setUpdateMessage({
          type: "success",
          text: `Status updated to "${newStatus}"`,
        });
      } else {
        throw new Error(result.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      const errorMessage = error.response?.data?.message || error.message;
      setUpdateMessage({ type: "error", text: `Error: ${errorMessage}` });
    } finally {
      setIsUpdating(false);
      // Hide message after 3 seconds
      setTimeout(() => setUpdateMessage({ type: "", text: "" }), 3000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 w-full mx-auto">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h2
            className="text-xl font-bold text-[#01356A] truncate"
            title={data.MainTitle}
          >
            {data.MainTitle || "No Title"}
          </h2>
          {data.SubTitle && (
            <div
              className="text-sm font-semibold text-[#01356A]/80 truncate mt-1"
              title={data.SubTitle}
            >
              {data.SubTitle}
            </div>
          )}
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
            statusColors[currentStatus] || "bg-gray-200 text-gray-700"
          }`}
        >
          {currentStatus || "Unknown"}
        </span>
      </div>
      {/* Images - all in one row */}
      {data.uploadedImageUrls && data.uploadedImageUrls.length > 0 && (
        <div className="flex gap-2 pt-2 flex-wrap">
          {data.uploadedImageUrls.slice(0, 5).map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt="Uploaded"
              className="w-16 h-16 object-cover rounded-md border-2 border-gray-200 cursor-pointer hover:border-[#01356A]/50 transition-all"
              onClick={() => setModalImg(url)}
            />
          ))}
        </div>
      )}
      {/* Large Image Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Large"
            className="max-w-[95vw] max-h-[95vh] rounded-lg border-4 border-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      {/* Description */}

      {data.description && (
        <div className="text-gray-600 text-sm max-w-full pt-2">
          {data.description}
        </div>
      )}
      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm pt-2">
        <InfoRow
          label="Date"
          value={data.date ? new Date(data.date).toLocaleDateString() : "-"}
        />
        <InfoRow
          label="Created"
          value={
            data.createdAt ? new Date(data.createdAt).toLocaleString() : "-"
          }
        />
        <InfoRow label="Severity" value={data.Severity_Level || "-"} />
        <InfoRow label="Submission" value={data.Submission_Method || "-"} />
        <InfoRow label="Address" value={data.tempory_address || "-"} />
        <InfoRow
          label="Coordinates"
          value={
            data.location_coordinates
              ? `${data.location_coordinates.lat ?? ""}${
                  data.location_coordinates.lat && data.location_coordinates.lng
                    ? ", "
                    : ""
                }${data.location_coordinates.lng ?? ""}`
              : "-"
          }
        />
        <InfoRow label="Affected Area" value={data.Affected_Area ?? "-"} />
        <InfoRow label="Ongoing" value={data.Is_It_Ongoing || "-"} />
        <InfoRow label="Dangerous" value={data.Is_It_Dangerous || "-"} />
        <InfoRow label="Person Involved" value={data.Person_involved || "-"} />
        <InfoRow label="Witnesses" value={data.Any_Witnesses || "-"} />
        <InfoRow label="Departments" value={data.Departments || "-"} />
        <InfoRow
          label="Construction"
          value={
            data.ConstructionType === true
              ? "Yes"
              : data.ConstructionType === false
              ? "No"
              : "-"
          }
        />
        <InfoRow label="Facility Type" value={data.FacilityType || "-"} />
        <InfoRow label="Facility Name" value={data.NameOfFacility || "-"} />
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <StatusTimeline
              statuses={timelineStatuses}
              currentStatus={currentStatus}
              onStatusSelect={handleUpdateStatus}
              isUpdating={isUpdating}
            />
          </div>
          <div className="md:col-span-2">
            {/* This area can be used for status-related details or actions in the future */}
            {isUpdating && (
              <div className="flex items-center justify-center h-full">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Updating status...</span>
                </div>
              </div>
            )}
            {updateMessage.text && !isUpdating && (
              <div className="flex items-center justify-center h-full">
                <div
                  className={`text-center p-4 rounded-lg ${
                    updateMessage.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {updateMessage.text}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainCard;
