import React from "react";

function DiscrptionInput() {
  return (
    <div>
      <h1 className=" text-gray-600 mb-1 font-semibold">Description</h1>
      <textarea
        style={{ textDecoration: "none" }}
        id="message"
        name="message"
        className="w-full md:w-5/6 rounded-md ring-1 ring-[#002B5A]/20 focus:ring-1 focus:outline-none focus:ring-[#002B5A]/40 px-3 self-center h-32"
      ></textarea>
      <p className="text-gray-400  mt-1 text-sm md:text-base">
        Provide a detailed description of the environmental issue. Minimum 10
        characters.
      </p>
    </div>
  );
}

export default DiscrptionInput;
