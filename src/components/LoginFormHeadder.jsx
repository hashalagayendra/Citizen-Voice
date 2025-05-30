import React from "react";
import logo from "@/assests/logo.png";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function LoginFormHeadder() {
  return (
    <div className="w-full h-16 bg-[#01356A] flex items-center px-4 justify-between pr-24 shadow-2xl">
      <div className=" flex items-center gap-3 ">
        <img src={logo.src} alt="" className="w-[42px] h-[42px] " />
        <h1 className="text-white font-bold">Public Grievance Portal</h1>
      </div>
      <div className="flex gap-8  flex-1 justify-end pr-28">
        <Link className="text-white " href={"#"}>
          Home
        </Link>
        <Link className="text-white " href={"#"}>
          About
        </Link>
        <Link className="text-white " href={"#"}>
          Category
        </Link>
        <Link className="text-white " href={"#"}>
          Language
        </Link>
      </div>
      <div className="flex gap-4 items-center  ">
        <Avatar className={"w-[40] h-[40] "}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-white font-semibold">Hasala Gayendra</h1>
      </div>
    </div>
  );
}

export default LoginFormHeadder;
