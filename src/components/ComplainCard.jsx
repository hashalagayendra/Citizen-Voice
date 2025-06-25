"use client";
import React, { useState } from "react";

const InfoRow = ({ label, value }) => (
  <div className="flex items-center gap-1 truncate">
    <span className="font-medium text-gray-600">{label}:</span>
    <span
      className="text-gray-800 truncate"
      title={typeof value === "string" ? value : undefined}
    >
      {value}
    </span>
  </div>
);

const ComplainCard = ({ data }) => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="bg-white rounded-xl shadow border border-[#01356A]/30 px-4 py-3 flex flex-col gap-2 w-full mx-auto">
      {/* Header Row: Title, Status */}
      <div className="flex items-center gap-3 mb-1">
        <div className="flex-1 min-w-0">
          <h2
            className="text-lg font-bold text-[#01356A] truncate"
            title={data.MainTitle}
          >
            {data.MainTitle || "No Title"}
          </h2>
          {data.SubTitle && (
            <div
              className="text-sm font-semibold text-[#01356A]/80 truncate"
              title={data.SubTitle}
            >
              {data.SubTitle}
            </div>
          )}
        </div>
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${
            data.C_status === "Resolved"
              ? "bg-green-100 text-green-700"
              : data.C_status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {data.C_status || "Unknown"}
        </span>
      </div>
      {/* Images - all in one row */}
      {data.uploadedImageUrls && data.uploadedImageUrls.length > 0 && (
        <div className="flex gap-1 mb-1 flex-wrap">
          {data.uploadedImageUrls.slice(0, 5).map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt="Uploaded"
              className="w-10 h-10 object-cover rounded border border-gray-200 cursor-pointer"
              onClick={() => setModalImg(url)}
            />
          ))}
        </div>
      )}
      {/* Large Image Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Large"
            className="max-w-[90vw] max-h-[90vh] rounded-lg border-4 border-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      {/* Description */}
      {data.description && (
        <div
          className="text-gray-700 text-sm truncate"
          title={data.description}
        >
          {data.description}
        </div>
      )}
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
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
        <InfoRow label="Temp. Address" value={data.tempory_address || "-"} />
        <InfoRow
          label="Location"
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
        <InfoRow label="Person" value={data.Person_involved || "-"} />
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
    </div>
  );
};

export default ComplainCard;
