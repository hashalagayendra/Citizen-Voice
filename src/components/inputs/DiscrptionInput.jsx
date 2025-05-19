import React from "react";

function DiscrptionInput() {
  return (
    <div>
      <h1 className=" text-gray-600 mb-3 font-bold">Description</h1>
      <textarea
        style={{ textDecoration: "none" }}
        id="message"
        name="message"
        className="w-full md:w-5/6 rounded-md ring-1 ring-[#002B5A]/20 focus:ring-1 focus:outline-none focus:ring-[#002B5A]/40 px-3 self-center h-32"
      ></textarea>
      <p className="text-gray-600 font-semibold mt-2 text-sm">
        Provide a detailed description of the environmental issue. Minimum 10
        characters.
      </p>
    </div>
  );
}

export default DiscrptionInput;
