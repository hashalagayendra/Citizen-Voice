"use client";
import { useState, useEffect } from "react";
import React from "react";
import { MapPinned, Navigation } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import dynamic from "next/dynamic";
import useGlobalStore from "@/store/useGlobalStore";
import LocationDetails from "./LocationDetails";

const MapWithNoSSR = dynamic(() => import("@/components/map.jsx"), {
  ssr: false,
});

function MapSelection() {
  const [open, setOpen] = useState(false);
  const { selected_Location_details, setselected_Location_details } =
    useGlobalStore();

  const { tempory_address, settempory_address } = useGlobalStore();

  useEffect(() => {
    console.log(selected_Location_details);
  }, []);
  return (
    <div className="w-full">
      <h1 className="font-bold text-gray-600  ">Location</h1>
      <div className="flex  w-full justify-between   md:w-5/6 ">
        <input
          value={tempory_address}
          type="text"
          className=" w-full h-10  rounded ring-1 ring-[#002B5A]/20 focus:ring-1 focus:outline-none focus:ring-[#002B5A]/40 px-3 self-center  "
        />

        <div
          className="bg-[#01356A] gap-4  flex w-52 items-center justify-center rounded"
          onClick={() => {
            setOpen((pre) => !pre);
          }}
        >
          <MapPinned className="text-white"></MapPinned>{" "}
          <h1 className="text-white">Select on Map</h1>
        </div>
      </div>

      <Drawer open={open} onOpenChange={setOpen} className={"h-full"}>
        <DrawerContent className="h-screen px-8 ">
          <DrawerHeader className={"flex justify-between w-full "}>
            <div className="w-full h-10 flex  text-start">
              <div className="w-1/2  ">
                {" "}
                <h1 className="text-2xl text-[#01356A] font-semibold">
                  Select Location
                </h1>
              </div>
              <div className="w-1/2 text-center">
                {selected_Location_details && (
                  <h1 className="text-2xl text-[#01356A] font-semibold">
                    Location Details
                  </h1>
                )}
              </div>
            </div>
          </DrawerHeader>

          <div className="w-full h-3/4 mr-4 flex">
            <div className=" flex-3/5">
              <MapWithNoSSR></MapWithNoSSR>
            </div>
            <div className="flex-2/4 flex flex-col  items-center  bg-transparent">
              <div className=" rounded-lg h-2xl w-full">
                {selected_Location_details ? (
                  <LocationDetails setOpen={setOpen} />
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center  ">
                    <Navigation className="h-16 w-16 text-blue-300 mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold text-[#01356A] mb-2">
                      No Location Selected
                    </h3>
                    <p className="text-gray-500">
                      Click on the map to view detailed location information
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MapSelection;
