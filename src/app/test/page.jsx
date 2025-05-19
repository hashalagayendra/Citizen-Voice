"use client";
import React from "react";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/map.jsx"), {
  ssr: false,
});

function page() {
  return (
    <div>
      <MapWithNoSSR></MapWithNoSSR>
    </div>
  );
}

export default page;
