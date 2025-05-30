import React from "react";
import LoginFormHeadder from "@/components/LoginFormHeadder";
import logo from "@/assests/logo.png";

export default function layout({ children }) {
  return (
    <div className="w-full h-full bg-[#002B5A]">
      <LoginFormHeadder></LoginFormHeadder>

      {children}

      <div
        className="w-full flex bg-[#01356B]
       py-8 xl:justify-around text-white text-sm md:justify-between px-12 gap-5"
      >
        <div className="  max-w-sm ">
          <div className=" flex items-center gap-3   mb-5">
            <img src={logo.src} alt="" className="w-[42px] h-[42px] " />
            <h1 className="text-white font-bold">Public Grievance Portal</h1>
          </div>
          <p>
            Working together for a cleaner, healthier environment for present
            and future generations.
          </p>
        </div>
        <div className=" max-w-sm">
          <p className="font-semibold mb-5">Contact Us</p>
          <p>
            Indira Paryavaran Bhawan Jor <br></br>Bagh Road, New Delhi - 110003
            <br></br>
            Email: complaints@epa.gov.in<br></br>
            Phone: 1800-100-4,144
          </p>
        </div>
        <div className="max-w-xs hidden md:block  md:text-start">
          <p className="font-semibold mb-5">Privacy Policy</p>

          <p>Abount</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
