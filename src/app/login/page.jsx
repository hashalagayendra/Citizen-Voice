"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import MainFormHeadder from "@/components/MainFormHeadder";
import { Toaster, toast } from "react-hot-toast";
import LoginPageImage from "@/assests/loginImage.png";
import GoogleLogo from "@/assests/google.png";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errormessege_haddler, seterrormessege_haddler] = useState(0);

  const { data: session, status } = useSession();
  if (status === "authenticated") router.push("/");

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("please login");
    }
  }, []);

  if (error && !errormessege_haddler) {
    toast.error(error);
    seterrormessege_haddler(1);
  }

  function haddlelogin() {
    try {
      signIn("credentials", {
        email: email,
        password: password,

        callbackUrl: "/login",
      });
    } catch (e) {
      console.log("login faild" + e);
    }
  }

  useEffect(() => {
    console.log(`email is ${email}  password is ${password} `);
  }, [email, password]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" h-full bg-[#01356A] ">
        <MainFormHeadder></MainFormHeadder>
        <Toaster position="top-right"></Toaster>

        <div className="w-full flex h-[calc(100vh-64px)]  mt-16 bg-white ">
          <div className="flex-1 md:flex-1/2 h-full flex flex-col justify-around items-center px-10 py-4 ">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
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

              <div className="w-full max-w-96">
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
            </div>
            <div
              onClick={() => {
                haddlelogin();
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
                Don't you have an account?
                <Link href={"/signup"} className="text-blue-500">
                  {" "}
                  Sign up
                </Link>
              </h1>
            </div>
          </div>
          <div className="md:block flex-1/2 h-full   hidden">
            <img
              src={LoginPageImage.src}
              alt=""
              className="object-center object-cover w-full h-full overflow-hidden"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default page;
