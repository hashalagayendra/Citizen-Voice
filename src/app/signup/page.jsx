"use client";
import MainFormHeadder from "@/components/MainFormHeadder";
import React from "react";
import LoginPageImage from "@/assests/loginImage.png";
import GoogleLogo from "@/assests/google.png";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import axios from "axios";

import { useSession } from "next-auth/react";

function page() {
  const router = useRouter();
  const [email, setemail] = useState();
  const [password, setpassword] = useState("");
  const [conf_password, setconf_password] = useState("");

  const { data: session, status } = useSession();
  if (status === "authenticated") router.push("/");

  async function haddleregister() {
    const errors = [];

    if (password.length < 6) {
      errors.push("Password must be at least 6 characters.");
    }
    if (!/[a-z]/.test(password) && !/[A-Z]/.test(password)) {
      errors.push(
        "Password must contain at least one letter (uppercase or lowercase)."
      );
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }

    if (password !== conf_password) {
      errors.push("Confirm Password is not match");
    }

    if (errors.length > 0) {
      errors.map((each) => {
        toast.error(each);
      });

      return;
    }

    const exsistuser = await axios.post("/api/user", {
      method: "check_user_by_email",
      data: {
        email: email,
      },
    });

    console.log(exsistuser.data.userExists);

    if (exsistuser.data.userExists) {
      toast.error("User already registered with this email.");
      return;
    }

    try {
      const response = await axios.post("/api/user", {
        method: "add_user",
        data: {
          email: email,
          password: password,
        },
      });

      console.log("response");

      toast.success("Success Registration");

      router.push("/login");
    } catch (e) {
      console.log("registation faild in catch block ", e);
    }
  }

  return (
    <div className=" h-full bg-[#01356A] ">
      <MainFormHeadder></MainFormHeadder>
      <Toaster position="top-right"></Toaster>

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
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="Example@email.com"
                type="email"
                className="w-full bg-[#e9f4ff] rounded focus:bg-[#e6f3ff] focus:outline-0 focus:ring-1 ring-blue-500 h-12 px-3 py-1"
              />
            </div>

            <div className="w-full max-w-96 mb-3">
              <h1>Password</h1>
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                placeholder="at least 8 chäracters"
                type="password"
                className="w-full bg-[#e9f4ff] rounded focus:bg-[#e6f3ff] focus:outline-0 focus:ring-1 ring-blue-500 h-12 px-3 py-1"
              />
            </div>

            <div className="w-full max-w-96">
              <h1>Confirm Password</h1>
              <input
                onChange={(e) => {
                  setconf_password(e.target.value);
                }}
                placeholder="at least 8 chäracters"
                type="password"
                className="w-full bg-[#e9f4ff] rounded focus:bg-[#e6f3ff] focus:outline-0 focus:ring-1 ring-blue-500 h-12 px-3 py-1"
              />
            </div>
          </div>
          <div
            onClick={() => {
              haddleregister();
            }}
            className="w-full max-w-96 bg-[#01356A] rounded h-12 flex justify-center items-center"
          >
            <h1 className="text-white font-semibold">Sign in</h1>
          </div>

          <div className="w-full max-w-96 mt-4 relative flex items-center z-0">
            <hr className="w-full border-t-2 border-gray-300" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-500 ">
              OR
            </span>
          </div>

          <div
            onClick={() => signIn("google", { callbackUrl: "/login" })}
            className="w-full max-w-96  bg-[#e9f4ff] rounded h-12 flex justify-center items-center gap-3"
          >
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
