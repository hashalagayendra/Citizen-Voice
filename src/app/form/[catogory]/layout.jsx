import React from "react";
import FormHeadder from "@/components/FormHeadder";
import logo from "@/assests/logo.png";

export default function layout({ children }) {
  return (
    <div className="w-dvw h-full bg-[#002B5A]">
      <FormHeadder></FormHeadder>

      {children}

      <div
        className="w-full flex bg-[#01356B]
       py-8 justify-around text-white text-sm"
      >
        <div className="  w-sm ">
          <div className=" flex items-center gap-3   mb-5">
            <img src={logo.src} alt="" className="w-[42px] h-[42px] " />
            <h1 className="text-white font-bold">Public Grievance Portal</h1>
          </div>
          <p>
            Working together for a cleaner, healthier environment for present
            and future generations.
          </p>
        </div>
        <div className=" w-sm">
          <p className="font-semibold mb-5">Contact Us</p>
          <p>
            Indira Paryavaran Bhawan Jor Bagh Road, New Delhi - 110003 Email:
            complaints@epa.gov.in Phone: 1800-100-4,144
          </p>
        </div>
        <div className="w-xs ">
          <p className="font-semibold mb-5">Privacy Policy</p>

          <p>Abount</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
