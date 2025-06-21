"use client";
import React from "react";
import { useState } from "react";
import Chat from "@/components/Chat";
import { X } from "lucide-react";
import { MessageCircle } from "lucide-react";
function ChatHaddler() {
  const [chatopen, setChatOpen] = useState(false);
  return (
    <div>
      {chatopen ? (
        <div className="max-sm:w-full  fixed max-sm:bottom-0 bottom-10 max-sm:right-0 right-10 w-lg  flex flex-col items-end ">
          <div
            className="w-10 h-10  rounded-full bg-[#01356A]"
            onClick={() => setChatOpen(false)}
          >
            <X className="w-10 h-10 text-white "></X>
          </div>

          <Chat></Chat>
        </div>
      ) : (
        <div
          className="fixed bottom-8 right-8 z-50 flex flex-col  items-center"
          onClick={() => setChatOpen(true)}
        >
          <button
            className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-900 shadow-2xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none ring-4 ring-blue-400/60 hover:bg-gradient-to-tr hover:from-indigo-700 hover:via-blue-800 hover:to-blue-600 group"
            title="Open Chat"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
          >
            {/* Animated glowing border */}
            <span className="absolute inset-0 rounded-full pointer-events-none border-2 border-blue-400/40 group-hover:border-indigo-400/70 animate-pulse" />
            {/* Notification badge */}

            {/* Icon */}
            <MessageCircle className="w-9 h-9 text-white drop-shadow-xl mb-1 z-10" />
            {/* Button text */}
            <span className="text-sm text-white font-bold tracking-wide z-10 drop-shadow-md">
              Chat
            </span>
          </button>
          <span className="mt-3 text-white text-base font-semibold drop-shadow-lg select-none tracking-wide bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 px-3 py-1 rounded-xl shadow-md border border-blue-400/30">
            Chat with Admin
          </span>
        </div>
      )}
    </div>
  );
}

export default ChatHaddler;
