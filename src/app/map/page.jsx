"use client";
import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import dynamic from "next/dynamic";

// Dynamically import the Map component with no SSR
const MapWithNoSSR = dynamic(() => import("@/components/map"), { ssr: false });

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({ onSelect, updateLocationDetails }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng);
      reverseGeocode(position.lat, position.lng, updateLocationDetails);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon} />
  );
}

async function reverseGeocode(lat, lng, locationdetails) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    locationdetails(data);
    // console.log(data);
    return data.display_name || "Address not found";
  } catch (error) {
    console.error("Error in reverse geocoding:", error);
    return "Could not fetch address";
  }
}

function Page() {
  // Changed from 'page' to 'Page' (React component naming convention)
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [location_Details, setlocation_Details] = useState();

  if (location_Details?.address?.road) {
    console.log(location_Details.address.road);
  }

  return (
    <div className="w-3/5 h-28">
      {" "}
      {/* Added proper container sizing */}
      <MapContainer
        center={[6.9271, 79.8612]}
        zoom={13}
        style={{ height: "400px", width: "100%" }} // Increased height for visibility
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker
          onSelect={(pos) => setSelectedLocation(pos)}
          updateLocationDetails={(data) => {
            setlocation_Details(data);
          }}
        />
      </MapContainer>
      {selectedLocation && (
        <p>
          Selected: Lat {selectedLocation.lat.toFixed(4)}, Lng{" "}
          {selectedLocation.lng.toFixed(4)}
        </p>
      )}
      {}
      <button onClick={() => {}}>ddfdfd</button>
    </div>
  );
}

export default Page;
