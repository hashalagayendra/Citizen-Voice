import React from "react";

const complaints = [
  {
    category: "Roads",
    title: "Pothole fixed on Main Street",
    received: "5 days",
    date: "June 12 2025",
    status: "Completed",
  },
  {
    category: "Enviroment",
    title: "Illegal trash dump cleared from Riverside Park",
    received: "3 days",
    date: "June 08 2025",
    status: "Completed",
  },
  {
    category: "Electricity",
    title: "Streetlight repaired on Oak Avenue",
    received: "2 days",
    date: "June 04 2025",
    status: "Completed",
  },
  {
    category: "Water",
    title: "Water leakage fixed at Central Square",
    received: "1 days",
    date: "June 02 2025",
    status: "Completed",
  },
];

const RecentlyResolutionComplaints = () => {
  return (
    <section className="py-10 bg-white recently-resolution-section">
      <div className="container max-w-[1200px] mx-auto text-center">
        <h2 className="text-[#0A3161] font-bold text-2xl md:text-3xl mb-2">
          Recently Resolution Complaints
        </h2>
        <p className="text-gray-600 mb-8">
          See how were making a difference in communities. Here are some
          recently resolved issues
        </p>
        <div className="complaints-row flex gap-6 justify-center flex-wrap mb-8">
          {complaints.map((c, idx) => (
            <div
              key={idx}
              className="complaint-card bg-white rounded-xl shadow-md border-t-8 border-2  border-[#0A3161] min-w-[260px] max-w-[300px] flex-1 flex flex-col justify-between p-6 text-left"
            >
              <div className="mb-3">
                <span className="text-[#0A3161] font-semibold text-base flex items-center gap-1.5 ">
                  <div className="text-lg w-7 h-7 bg-blue-300/30 rounded-full flex items-center justify-center ">
                    ⓘ
                  </div>
                  {c.category}
                </span>
              </div>
              <div className="font-semibold text-lg mb-4">{c.title}</div>
              <div className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                <span className="text-base">🕒</span> Received in: {c.received}
              </div>
              <div className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                <span className="text-base">📅</span> {c.date}
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-300/30 text-[#0A3161] rounded-md px-3 py-1 font-semibold text-sm">
                  {c.status}
                </span>
                <button
                  className="bg-none border-none text-[#0A3161] font-medium cursor-pointer text-sm underline p-0"
                  type="button"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all-btn border-[1.5px] border-[#0A3161] bg-white text-[#0A3161] rounded-md px-8 py-2.5 font-semibold text-base cursor-pointer mt-2 transition-colors duration-200 hover:bg-[#0A3161] hover:text-white">
          View All Resolved Complaints
        </button>
      </div>
    </section>
  );
};

export default RecentlyResolutionComplaints;
