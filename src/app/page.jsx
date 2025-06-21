import MainFormHeadder from "@/components/MainFormHeadder";
import Image from "next/image";
import Chat from "@/components/Chat";
import ChatHaddler from "@/components/ChatHaddler";

export default function Home() {
  return (
    <div className=" h-dvh bg-[#01356B]">
      <MainFormHeadder></MainFormHeadder>
      <div className="w-dvw">
        <ChatHaddler></ChatHaddler>
      </div>
    </div>
  );
}
