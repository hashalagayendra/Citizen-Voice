"use client";
import MainFormHeadder from "@/components/MainFormHeadder";
import React from "react";
import LoginPageImage from "@/assests/loginImage.png";
import GoogleLogo from "@/assests/google.png";
import Link from "next/link";

function page() {
  return (
    <div className=" h-full bg-[#01356A] ">
      <MainFormHeadder></MainFormHeadder>

      <div className="w-full flex h-[calc(100vh-64px)]  mt-16 bg-white ">
        <div className="flex-1 md:flex-1/2 h-full flex flex-col justify-around items-center px-10 py-4 ">
          <h1 className="text-4xl font-bold text-center">
            Register your information
          </h1>
          <h1 className="w-full max-w-96  text-sm text-center">
            Today is your opportunity to take part in making your community
            better. Log in to report issues, follow up on your previous
            complaints, and contribute to building a more transparent and
            responsive system.
          </h1>

          <div className="w-full max-w-96 ">
            <div className="w-full max-w-96 mb-3">
              <h1>Email</h1>
              <input
                placeholder="Example@email.com"
                type="email"
                className="w-full bg-[#e9f4ff] rounded focus:bg-[#e6f3ff] focus:outline-0 focus:ring-1 ring-blue-500 h-12 px-3 py-1"
              />
            </div>

            <div className="w-full max-w-96 mb-3">
              <h1>Password</h1>
              <input
                placeholder="at least 8 chäracters"
                type="password"
                className="w-full bg-[#e9f4ff] rounded focus:bg-[#e6f3ff] focus:outline-0 focus:ring-1 ring-blue-500 h-12 px-3 py-1"
              />
            </div>

            <div className="w-full max-w-96">
              <h1>Confirm Password</h1>
              <input
                placeholder="at least 8 chäracters"
                type="password"
                className="w-full bg-[#e9f4ff] rounded focus:bg-[#e6f3ff] focus:outline-0 focus:ring-1 ring-blue-500 h-12 px-3 py-1"
              />
            </div>
          </div>
          <div className="w-full max-w-96 bg-[#01356A] rounded h-12 flex justify-center items-center">
            <h1 className="text-white font-semibold">Sign in</h1>
          </div>

          <div className="w-full max-w-96 mt-4 relative flex items-center z-0">
            <hr className="w-full border-t-2 border-gray-300" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-500 ">
              OR
            </span>
          </div>

          <div className="w-full max-w-96  bg-[#e9f4ff] rounded h-12 flex justify-center items-center gap-3">
            <div className="h-full py-3">
              <img src={GoogleLogo.src} alt="" className="h-full" />
            </div>

            <h1 className=" text-black">Sign in with Goode</h1>
          </div>

          <div>
            <h1>
              Do you have an account?
              <Link href={"/login"} className="text-blue-500">
                {" "}
                Log in
              </Link>
            </h1>
          </div>
        </div>
        <div className="md:block flex-1/2 h-full  hidden">
          <img
            src={LoginPageImage.src}
            alt=""
            className=" object-cover w-full h-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
