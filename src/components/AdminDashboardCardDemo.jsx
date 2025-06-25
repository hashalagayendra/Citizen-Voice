import React from "react";
import AdminDashboardCard from "@/components/ComplainCard";

const tempData = {
  MainTitle: "Water Leakage in Main Road",
  SubTitle: "Urgent Attention Needed",
  description:
    "There is a major water leakage near the main road causing inconvenience to commuters and damaging the road.",
  location_coordinates: { lat: 6.9271, lng: 79.8612 },
  tempory_address: "123 Main St, Colombo",
  date: new Date().toISOString(),
  uploadedImageUrls: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  ],
  Severity_Level: "High",
  Submission_Method: "Online",
  Any_Witnesses: "Yes",
  Affected_Area: 50,
  Is_It_Ongoing: "Yes",
  Person_involved: "John Doe",
  Departments: "Water Board, Road Development",
  ConstructionType: true,
  Is_It_Dangerous: "Yes",
  FacilityType: "Public Road",
  createdAt: new Date().toISOString(),
  C_status: "Pending",
  NameOfFacility: "Main Road Pipeline",
};

const AdminDashboardCardDemo = () => (
  <div>
    <AdminDashboardCard data={tempData} />
  </div>
);

export default AdminDashboardCardDemo;
