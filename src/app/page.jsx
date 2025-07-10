"use client";
import MainFormHeadder from "@/components/MainFormHeadder";
import Image from "next/image";
import Chat from "@/components/Chat";
import logo from "@/assests/logo.png";
import ChatHaddler from "@/components/ChatHaddler";
import HeroSection from "@/components/homePageComponents/HeroSection";
import Catogoris from "@/components/homePageComponents/Catogoris";
import HowItsWork from "@/components/homePageComponents/HowItsWork";
import RecentlyResolutionComplaints from "@/components/homePageComponents/Recently_Resolution_Complaints";
import EmergencyContacts from "@/components/homePageComponents/EmergencyContacts";
import AboutUs from "@/components/homePageComponents/AboutUs";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log("session data", session);
  }

  function scrollToComplaintsSection() {
    document
      .getElementById("complaints-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAboutSection() {
    document
      .getElementById("about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo === "about") {
      const el = document.getElementById("about-section");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // slight delay after page load
      }
    }

    if (scrollTo === "complains") {
      const el = document.getElementById("complaints-section");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // slight delay after page load
      }
    }
  }, [searchParams]);

  return (
    <div className="  h-[calc(100vh-64px)] w-full bg-[#01356B]  overflow-x-hidden-hidden ">
      <MainFormHeadder
        className="z-10"
        scrollToAboutSection={scrollToAboutSection}
        scrole={scrollToComplaintsSection}
      ></MainFormHeadder>
      <div className="mt-16 h-[calc(100vh-64px)] ">
        {status === "authenticated" && (
          <ChatHaddler className="z-50 absolute"></ChatHaddler>
        )}

        <div className="w-full h-full ">
          <HeroSection scrole={scrollToComplaintsSection}></HeroSection>
        </div>

        {status === "authenticated" && (
          <div id="complaints-section">
            <Catogoris></Catogoris>
          </div>
        )}

        <HowItsWork></HowItsWork>
        <RecentlyResolutionComplaints></RecentlyResolutionComplaints>
        <EmergencyContacts></EmergencyContacts>

        {
          <div id="about-section">
            <AboutUs></AboutUs>
          </div>
        }

        <div
          className="w-full flex bg-[#01356B]
               py-8 xl:justify-around text-white text-sm md:justify-between px-12 gap-5"
        >
          <div className="  max-w-sm ">
            <div className=" flex items-center gap-3   mb-5">
              <img src={logo.src} alt="" className="w-[42px] h-[42px] " />
              <h1 className="text-white font-bold">Citizen Voice</h1>
            </div>
            <p>
              Citizen Voice is a platform designed to empower citizens by
              providing a direct channel to report public concerns and ensure
              every voice is heard. It aims to facilitate communication between
              citizens and authorities, promoting transparency and
              accountability in governance.
            </p>
          </div>
          {/* <div className=" max-w-sm">
            <p className="font-semibold mb-5">Contact Us</p>
            <p>
              Indira Paryavaran Bhawan Jor <br></br>Bagh Road, New Delhi -
              110003
              <br></br>
              Email: complaints@epa.gov.in<br></br>
              Phone: 1800-100-4,144
            </p>
          </div> */}
          <div className="max-w-xs hidden md:block  md:text-start">
            <p className="font-semibold mb-5">Privacy Policy</p>

            <p>Abount</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
