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
import ContactUs from "@/components/homePageComponents/ContactUs";

export default function Home() {
  return (
    <div className="  h-[calc(100vh-64px)] w-full bg-[#01356B]  overflow-x-hidden-hidden ">
      <MainFormHeadder></MainFormHeadder>
      <div className="mt-16 h-[calc(100vh-64px)] ">
        <ChatHaddler></ChatHaddler>
        <div className="w-full h-full bg-red-400">
          <HeroSection></HeroSection>
        </div>

        <Catogoris></Catogoris>
        <HowItsWork></HowItsWork>
        <RecentlyResolutionComplaints></RecentlyResolutionComplaints>
        <EmergencyContacts></EmergencyContacts>
        <ContactUs></ContactUs>

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
              Indira Paryavaran Bhawan Jor <br></br>Bagh Road, New Delhi -
              110003
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
    </div>
  );
}
