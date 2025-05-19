"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import useGlobalStore from "@/store/useGlobalStore";

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

function LocationMarker({ onSelect, location_Details }) {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng);
    },
  });
  // console.log(location_Details)
  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>{location_Details?.address?.state}</Popup>
      <Tooltip>{location_Details?.address?.state}</Tooltip>
    </Marker>
  );
}

function Page() {
  const { location_coordinates, setlocation_coordinates } = useGlobalStore();
  const { selected_Location_details, setselected_Location_details } =
    useGlobalStore();

  // Changed from 'page' to 'Page' (React component naming convention)
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [location_Details, setlocation_Details] = useState();

  useEffect(() => {
    async function reverseGeocode(lat, lng) {
      try {
        // console.log(lat, lng);
        setlocation_coordinates(lat, lng);

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setlocation_Details(data);
        setselected_Location_details(data);

        return data.display_name || "Address not found";
      } catch (error) {
        console.error("Error in reverse geocoding:", error);
        return "Could not fetch address";
      }
    }

    if (selectedLocation) {
      reverseGeocode(selectedLocation.lat, selectedLocation.lng);
    }
    // console.log(selected_Location_details);
  }, [selectedLocation]);

  return (
    <div className="w-full h-full rounded-2xl">
      {" "}
      {/* Added proper container sizing */}
      <MapContainer
        center={[6.9271, 79.8612]}
        zoom={13}
        style={{ height: "100%", width: "100%" }} // Increased height for visibility
        className="rounded-3xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker
          onSelect={(pos) => setSelectedLocation(pos)}
          location_Details={location_Details}
        />
      </MapContainer>
      {/* {selectedLocation && (
        <p>
          Selected: Lat {selectedLocation.lat.toFixed(4)}, Lng{" "}
          {selectedLocation.lng.toFixed(4)}
        </p>
      )} */}
      {}
      {/* <button onClick={() => {}}>ddfdfd</button>
      <h1>{location_Details?.address?.state}</h1>
      <h1>data: {location_coordinates.lat}</h1>
      <h1>
        location details in global {selected_Location_details?.address?.state}
      </h1> */}
    </div>
  );
}

export default Page;
