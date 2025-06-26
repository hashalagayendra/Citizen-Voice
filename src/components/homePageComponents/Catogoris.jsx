import React from "react";

const categories = [
  {
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10m0 0l3-3m-3 3l-3-3"
        />
      </svg>
    ),
    title: "Environmental Hazards",
    desc: "Report issues like pollution, illegal dumping, and deforestation.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3zm6 0c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3z"
        />
      </svg>
    ),
    title: "Crime Reporting",
    desc: "Report theft, assault, vandalism, or suspicious activity.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M3 14h18M5 6h14M5 18h14"
        />
      </svg>
    ),
    title: "Infrastructure Issues",
    desc: "Report issues like potholes, bridge damage, and broken streetlights.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Water & Sanitation",
    desc: "Report water leaks, sanitation, and drainage problems.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a5 5 0 00-10 0v2M5 9h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z"
        />
      </svg>
    ),
    title: "Public Health",
    desc: "Report health hazards, disease outbreaks, and unsafe conditions.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20l9-5-9-5-9 5 9 5z"
        />
      </svg>
    ),
    title: "Road Safety",
    desc: "Report accidents, unsafe crossings, and road hazards.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z"
        />
      </svg>
    ),
    title: "Other",
    desc: "Report any other issues affecting your community.",
  },
];

function Catogoris() {
  return (
    <div className="w-full px-2 py-8 overflow-x-hidden">
      <div className="text-center my-8 self-justify-center flex flex-col items-center gap-4 ">
        <h1 className="text-3xl text-[#01356B] font-bold">
          Quick Complaint Shortcuts
        </h1>
        <p className="max-w-2xl text-gray-500">
          Select a category to quickly file a complaint. Our system will guide
          you through the specific details needed for each type
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#0A3761] rounded-xl shadow-md p-6 flex flex-col items-center text-white min-h-[220px] transition-transform hover:scale-105"
          >
            {cat.icon}
            <h3 className="text-lg font-semibold mb-2 text-center">
              {cat.title}
            </h3>
            <p className="text-sm text-center opacity-80">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catogoris;
