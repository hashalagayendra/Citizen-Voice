import React, { useEffect } from "react";
import { House, Building2, Map, Globe, Navigation } from "lucide-react";
import useGlobalStore from "@/store/useGlobalStore";

function LocationDetails({ setOpen }) {
  function addressmaker(display_name) {
    // Step 1: Split into array
    const parts = display_name.split(", ");

    // Step 2: Remove last 3 items
    const trimmedParts = parts.slice(0, -3);
    // console.log(trimmedParts);

    // Step 3: Join back to string
    const newDisplayName = trimmedParts.join(", ");

    return newDisplayName;
  }

  const { selected_Location_details, setselected_Location_details } =
    useGlobalStore();
  const { tempory_address, settempory_address } = useGlobalStore();

  useEffect(() => {
    console.log(selected_Location_details);
  }, [selected_Location_details]);
  return (
    <div className="w-full px-5  h-full flex flex-col    justify-start  ">
      <div className="h-full text-xl   mt-5 flex flex-col gap-4">
        <div className="detail_container bg-blue-200/30 p-3 rounded-md">
          <div className="flex gap-4">
            {" "}
            <House className="text-blue-500"></House>
            <h1 className="text-sm">Street Address</h1>
          </div>

          <h1 className="ml-10 text-sm  max-md:text-xs   max-md:font-medium font-bold">
            {addressmaker(selected_Location_details?.display_name)}

            {}
          </h1>
        </div>

        <div className="flex max-sm:hidden justify-between gap-2">
          <div className="detail_container bg-blue-200/30 p-3 rounded-md flex-1">
            <div className="flex gap-4">
              {" "}
              <Building2 className="text-blue-500"></Building2>
              <h1 className="text-sm">Aria</h1>
            </div>

            <h1 className="ml-10 text-sm">
              {selected_Location_details?.address?.village ||
                selected_Location_details?.address?.town ||
                selected_Location_details?.address?.city}
            </h1>
          </div>

          <div className="detail_container max-sm:hidden bg-blue-200/30 p-3 rounded-md flex-1">
            <div className="flex gap-4">
              {" "}
              <Map className="text-blue-500"></Map>
              <h1 className="text-sm">District</h1>
            </div>

            <h1 className="ml-10 text-sm ">
              {selected_Location_details?.address?.state_district}
            </h1>
          </div>
        </div>

        <div className="flex justify-between max-sm:hidden gap-2">
          <div className="detail_container bg-blue-200/30 p-3 rounded-md flex-1">
            <div className="flex gap-4">
              {" "}
              <Globe className="text-blue-500"></Globe>
              <h1 className="text-sm">Province</h1>
            </div>

            <h1 className="ml-10 text-sm ">
              {selected_Location_details?.address?.state}
            </h1>
          </div>

          <div className="detail_container max-sm:hidden bg-blue-200/30 p-3 rounded-md flex-1">
            <div className="flex gap-4">
              {" "}
              <Navigation className="text-blue-500"></Navigation>
              <h1 className="text-sm">Postal Code</h1>
            </div>

            <h1 className="ml-10 text-sm">
              {selected_Location_details?.address?.postcode}
            </h1>
          </div>
        </div>

        <div className="flex  justify-around gap-2">
          <h1
            className="px-5 flex-1 text-sm py-3 text-center bg-[#01356A] rounded text-white font-semibold "
            onClick={() => {
              settempory_address(selected_Location_details?.display_name);
              setOpen(false);
            }}
          >
            Confirm Location
          </h1>

          <h1
            onClick={() => {
              setOpen(false);
              settempory_address("");
            }}
            className="text-sm flex-1 px-5 py-3 text-center  rounded bg-white ring-2 ring-[#01356A] text-[#01356A] font-semibold"
          >
            Cancel
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
