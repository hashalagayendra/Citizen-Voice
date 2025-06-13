"use client";
import { Menu } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import logo from "@/assests/logo.png";
import { X } from "lucide-react";
import Link from "next/link";

function MainFormHeadder() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [mobileCatogoris, setmobileCatogoris] = useState(false);

  return (
    <div className="h-16 bg-[#002B5A] flex items-center justify-between fixed top-0 w-full  z-50">
      <Link href={"/"}>
        <div className=" flex items-center gap-3 pl-4 ">
          <img src={logo.src} alt="" className="w-[42px] h-[42px] " />
          <h1 className="text-white font-bold w-36 whitespace-nowrap ">
            Citizen Voice
          </h1>
        </div>
      </Link>
      <div className="  h-full w-full flex items-center justify-end md:gap-6 gap-4 pr-6 ">
        <div className=" w-fit   md:gap-6 gap-3 text-sm md:text-base font-semibold text-white hidden sm:flex">
          <Link href={"/"}>
            {" "}
            <h1>Home</h1>
          </Link>
          <h1>About</h1>
          <div className=" relative group">
            <h1 className=" ">Catogoris</h1>
            <div className="absolute  pb-5 w-xs right-1/2 translate-x-1/2 font-normal   hidden group-hover:block hover:block ">
              <div className="h-[20px]  w-full ">{""}</div>
              <div
                className={` pt-3 pb-5 text-start  ${"bg-white text-black"}  `}
              >
                <Link href={"form/Environment"}>
                  <h1
                    className={` w-full px-15 py-2.5  ${"hover:bg-blue-400"}`}
                  >
                    Environmental Hazards
                  </h1>
                </Link>
                <Link href={"form/Crime"}>
                  <h1 className="hover:bg-blue-400 w-full pl-15 py-2.5 ">
                    Poor Public Services
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-blue-400 w-full pl-15 py-2.5">
                    Public Employee Misconduct
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-blue-400 w-full pl-15 py-2.5 ">
                    Corruption & Bribery
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-blue-400 w-full pl-15 py-2.5 ">
                    Illegal Constructions
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-blue-400 w-full pl-15 py-2.5 ">
                    Infrastructure Issues
                  </h1>
                </Link>
                <Link href={"form/Environment"}>
                  <h1 className="hover:bg-blue-400 w-full pl-15 py-2.5">
                    Crime Reporting
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          <h1>Complains</h1>

          <h1>Languages</h1>
        </div>
        <Link href={"/login"}>
          {" "}
          <div className="bg-amber-400 px-6 py-2 rounded text-[#01356A] text-sm md:text-base ">
            Login
          </div>
        </Link>

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
        onClick={() => {
          setmobileMenu(false);
        }}
        className={`z-50 bg-white backdrop-blur-md absolute top-full  w-full h-[calc(100dvh-64px)] flex-col items-center justify-center text-xl gap-6 flex  text-black sm:hidden ${
          mobileMenu ? "flex" : "hidden"
        } `}
      >
        <h1 className="hover:bg-blue-400 w-full text-center  py-2.5 ">Home</h1>
        <h1 className="hover:bg-blue-400 w-full text-center  py-2.5 ">About</h1>
        <h1
          className="hover:bg-blue-400 w-full text-center  py-2.5 "
          onClick={() => {
            setmobileCatogoris(true);
            setmobileMenu(false);
          }}
        >
          Catogoris
        </h1>
        <h1 className="hover:bg-blue-400 w-full text-center  py-2.5 ">
          Complains
        </h1>
        <h1 className="hover:bg-blue-400 w-full text-center  py-2.5 ">
          Languages
        </h1>
      </div>

      <div
        onClick={() => {
          setmobileMenu(false);
          setmobileCatogoris(false);
        }}
        className={` z-50 bg-white   absolute top-full  w-full h-[calc(100dvh-64px)] flex-col items-center justify-center text-xl gap-6 flex  text-black sm:hidden ${
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
          <ArrowLeft
            strokeWidth="1px"
            className="scale-150 text-black"
          ></ArrowLeft>
        </div>
        <div className="  w-full text-center">
          <Link href={"form/Environment"}>
            <h1 className="hover:bg-blue-400 w-full  py-2.5 ">
              Environmental Hazards
            </h1>
          </Link>
          <Link href={"form/Crime"}>
            <h1 className="hover:bg-blue-400 w-full  py-2.5 ">
              Poor Public Services
            </h1>
          </Link>
          <Link href={"form/Environment"}>
            <h1 className="hover:bg-blue-400 w-full  py-2.5">
              Public Employee Misconduct
            </h1>
          </Link>
          <Link href={"form/Environment"}>
            <h1 className="hover:bg-blue-400 w-full  py-2.5 ">
              Corruption & Bribery
            </h1>
          </Link>
          <Link href={"form/Environment"}>
            <h1 className="hover:bg-blue-400 w-full  py-2.5 ">
              Illegal Constructions
            </h1>
          </Link>
          <Link href={"form/Environment"}>
            <h1 className="hover:bg-blue-400 w-full  py-2.5 ">
              Infrastructure Issues
            </h1>
          </Link>
          <Link href={"form/Environment"}>
            <h1 className="hover:bg-blue-400 w-full  py-2.5">
              Crime Reporting
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainFormHeadder;
