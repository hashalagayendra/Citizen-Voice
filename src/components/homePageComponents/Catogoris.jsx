import React from "react";
import { Nav } from "react-day-picker";
import Link from "next/link";
import { TreePine } from "lucide-react";
import { TrafficCone } from "lucide-react";
import { Building2 } from "lucide-react";
import { HandCoins } from "lucide-react";
import { UserRoundX } from "lucide-react";
import { Droplet } from "lucide-react";

const categories = [
  {
    icon: <TreePine></TreePine>,
    title: "Environmental Hazards",
    desc: "Report issues like pollution, illegal dumping, and deforestation.",
    navigation: "/form/Environmental_Hazards",
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
    navigation: "/form/Crime",
  },
  {
    icon: <TrafficCone></TrafficCone>,
    title: "Infrastructure Issues",
    desc: "Report issues like potholes, bridge damage, and broken streetlights.",
    navigation: "/form/Infrastructure_Issues",
  },
  {
    icon: <Building2></Building2>,
    title: "Illegal Constructions",
    desc: "Report unauthorized buildings or structure violations.",
    navigation: "/form/Illegal_Constructions",
  },
  {
    icon: <HandCoins></HandCoins>,
    title: "Corruption & Bribery",
    desc: "Report acts of bribery, misuse of public funds, or corruption.",
    navigation: "/form/Corruption_and_Bribery",
  },
  {
    icon: <UserRoundX></UserRoundX>,
    title: "Public Employee Misconduct",
    desc: "Report negligence, abuse of power, or unethical behavior by officials.",
    navigation: "/form/Public_Employee_Misconduct",
  },
  {
    icon: <Droplet></Droplet>,
    title: "Poor Public Services",
    desc: "Report delays, lack of  poor quality in public facilities like waste collection or customer service.",
    navigation: "/form/Poor_Public_Services",
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
          <Link key={idx} href={cat.navigation}>
            <div className="bg-[#0A3761] rounded-xl shadow-md p-6 flex flex-col items-center text-white min-h-[220px] transition-transform hover:scale-105">
              {cat.icon}

              <h3 className="text-lg font-semibold mb-2 text-center">
                {cat.title}
              </h3>
              <p className="text-sm text-center opacity-80">{cat.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Catogoris;
