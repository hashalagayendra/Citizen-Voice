"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import logo from "@/assests/logo.png";
import { X } from "lucide-react";
import Link from "next/link";
function MainFormHeadder() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [mobileCatogoris, setmobileCatogoris] = useState(false);
  return (
    <div className="h-16 bg-[#002B5A] flex items-center justify-between fixed top-0 w-full  ">
      <div className=" flex items-center gap-3 pl-4 ">
        <img src={logo.src} alt="" className="w-[42px] h-[42px] " />
        <h1 className="text-white font-bold w-36 whitespace-nowrap ">
          Citizen Voice
        </h1>
      </div>
      <div className="  h-full w-full flex items-center justify-end md:gap-6 gap-4 pr-6">
        <div className=" w-fit   md:gap-6 gap-3 text-sm md:text-base font-semibold text-white hidden sm:flex">
          <h1>Home</h1>
          <h1>About</h1>
          <div className=" relative group">
            <h1 className=" ">Catogoris</h1>
            <div className="absolute  pb-5 w-xs right-1/2 translate-x-1/2 font-normal   hidden group-hover:block hover:block ">
              <div className="h-[20px]  w-full ">{""}</div>
              <div className="bg-white/10 pt-3 pb-5 text-start   ">
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-white/20 w-full px-15 py-2.5 ">
                    Environmental Hazards
                  </h1>
                </Link>
                <Link href={"form/Crime"}>
                  <h1 className="hover:bg-white/20 w-full pl-15 py-2.5 ">
                    Poor Public Services
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-white/20 w-full pl-15 py-2.5">
                    Public Employee Misconduct
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-white/20 w-full pl-15 py-2.5 ">
                    Corruption & Bribery
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-white/20 w-full pl-15 py-2.5 ">
                    Illegal Constructions
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-white/20 w-full pl-15 py-2.5 ">
                    Infrastructure Issues
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-white/20 w-full pl-15 py-2.5">
                    Crime Reporting
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          <h1>Complains</h1>

          <h1>Languages</h1>
        </div>

        <div className="bg-amber-400 px-6 py-2 rounded text-[#01356A] text-sm md:text-base ">
          Login
        </div>
        <div
          onClick={() => {
            if (mobileCatogoris) {
              setmobileMenu(false);
              setmobileCatogoris(false);
            } else {
              setmobileMenu((pre) => !pre);
            }

            //
            // setmobileCatogoris(false);
          }}
          className="sm:hidden flex ml-8"
        >
          <Menu className="text-white"></Menu>
        </div>
      </div>
      <div
        className={`bg-white/10 backdrop-blur-md absolute top-full  w-full h-[calc(100dvh-64px)] flex-col items-center justify-center text-xl gap-6 flex  text-white sm:hidden ${
          mobileMenu ? "flex" : "hidden"
        } `}
      >
        <h1>Home</h1>
        <h1>About</h1>
        <h1
          onClick={() => {
            setmobileCatogoris(true);
            setmobileMenu(false);
          }}
        >
          Catogoris
        </h1>
        <h1>Complains</h1>
        <h1>Languages</h1>
      </div>

      <div
        className={`bg-white/10  backdrop-blur-md absolute top-full  w-full h-[calc(100dvh-64px)] flex-col items-center justify-center text-xl gap-6 flex  text-white sm:hidden ${
          mobileCatogoris ? "flex" : "hidden"
        } `}
      >
        <div
          className="absolute top-14 right-14"
          onClick={() => {
            setmobileCatogoris((pre) => {
              !pre;
            });
            setmobileMenu(true);
          }}
        >
          <X className="scale-150"></X>
        </div>
      </div>
    </div>
  );
}

export default MainFormHeadder;
