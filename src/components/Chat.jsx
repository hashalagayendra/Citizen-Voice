"use client";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { database } from "@/lib/firebaseConfig";
import {
  ref,
  set,
  push,
  query,
  orderByChild,
  equalTo,
  get,
  update,
  getDatabase,
  onValue,
} from "firebase/database";

export default function Chat() {
  const [activeTab, setActiveTab] = useState("admin"); // "admin" or "ai"
  const [adminMessages, setAdminMessages] = useState([]);
  const [aiMessages, setAiMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  //   const database = getDatabase();
  const router = useRouter();

  const { data: session, status } = useSession();
  if (status === "unauthenticated") router.push("/");

  //   const saveData = async (email) => {
  //     try {
  //       // Create a unique user ID using push()
  //       const newUserRef = push(ref(database, "users"));

  //       await set(newUserRef, {
  //         email: email,
  //       });

  //       console.log("Data saved successfully under ID:", newUserRef.key);
  //     } catch (error) {
  //       console.error("Error saving data:", error);
  //     }
  //   };

  // Usage:

  // Simulate AI bot reply
  //   const handleAiSend = () => {
  //     if (input.trim() === "") return;
  //     const userMsg = { sender: "You", text: input };
  //     setAiMessages((prev) => [...prev, userMsg]);
  //     setInput("");
  //     setTimeout(() => {
  //       setAiMessages((prev) => [
  //         ...prev,
  //         { sender: "AI Bot", text: "This is a sample AI response." },
  //       ]);
  //     }, 700);
  //   };

  //   const handleAdminSend = () => {
  //     if (input.trim() === "") return;
  //     setAdminMessages((prev) => [...prev, { sender: "You", text: input }]);
  //     setInput("");

  //     setTimeout(() => {
  //       setAdminMessages((prev) => [
  //         ...prev,
  //         { sender: "admin", text: "This is a sample AI response." },
  //       ]);
  //     }, 700);
  //     // Here you can add logic to send the message to the admin
  //   };

  useEffect(() => {
    const database = getDatabase();
    const usersRef = ref(database, "users");

    onValue(usersRef, async () => {
      const q = query(
        usersRef,
        orderByChild("email"),
        equalTo(session?.user?.email) // use full email
      );
      const snapshot = await get(q);
      console.log("Snapshot:", snapshot.val());

      if (snapshot.exists()) {
        const data = snapshot.val();
        const userId = Object.keys(data)[0]; // get the first matching user ID
        const user = data[userId];

        console.log("🔄 Database changed:");
        console.log(user.messages);
        setAdminMessages(user.messages || []);
        console.log("User ID:", "hasalagayendra360@gmail.com");
      }
    });
    console.log("Page component mounted");
    return () => {
      // No direct unsubscribe for onValue with async callback, but cleanup can be handled if needed
    };
  }, [session]);

  const addMessageByEmail = async () => {
    if (input.trim() === "") return;
    const newMessage = {
      sender: "You",
      text: input,
    };
    try {
      const usersRef = ref(database, "users");
      const q = query(
        usersRef,
        orderByChild("email"),
        equalTo(session?.user?.email)
      );
      const snapshot = await get(q);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const userId = Object.keys(data)[0]; // get the first matching user ID
        const user = data[userId];

        // Clone and append the new message
        console.log(user.messages);

        const updatedMessages = [...(user.messages || []), newMessage];

        // Update the messages array
        await update(ref(database, `users/${userId}`), {
          messages: updatedMessages,
        });

        setAdminMessages(() => [...updatedMessages]);
        setInput("");

        console.log(
          `Message added for user with email: ${session?.user?.email}`
        );
      } else {
        console.log("No user found with this email.");
      }
    } catch (error) {
      console.error("Failed to add message:", error);
    }
  };

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [adminMessages, aiMessages, activeTab]);

  const messages = activeTab === "admin" ? adminMessages : aiMessages;
  //   const handleSend = activeTab === "admin" ? handleAdminSend : handleAiSend;

  return (
    <div className="max-w-l  max-sm:w-full  w-full  mx-auto mt-3 p-0 border border-gray-200 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-xl flex flex-col h-[70vh]">
      {/* Tab Switcher */}

      <div className="flex justify-center  ">
        <button
          className={`flex-1 px-4 py-2 h-full rounded-tl-lg font-semibold transition
            ${
              activeTab === "admin"
                ? "bg-[#01356A] text-white shadow"
                : "bg-gray-100 text-[#01356A] hover:bg-blue-100"
            }`}
          onClick={() => setActiveTab("admin")}
        >
          Chat with Admin
        </button>
        <button
          className={`flex-1 px-4 py-2 rounded-tr-lg font-semibold transition
            ${
              activeTab === "ai"
                ? "bg-[#01356A] text-white shadow"
                : "bg-gray-100 text-[#01356A] hover:bg-blue-100"
            }`}
          onClick={() => setActiveTab("ai")}
        >
          Chat with AI Bot
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-2 text-center pt-2 text-[#01356A] drop-shadow">
        {activeTab === "admin" ? "Chat with Admin" : "Chat with AI Bot"}
      </h2>
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {messages.length === 0 ? (
          <div className="text-gray-400 text-center mt-20">
            No messages yet.
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl shadow
                  ${
                    msg.sender === "You"
                      ? "bg-[#01356A] text-white rounded-br-none"
                      : msg.sender === "AI Bot" || msg.sender === "admin"
                      ? "bg-green-200 text-green-900 rounded-bl-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
              >
                <span className="block text-xs font-semibold mb-1 opacity-70">
                  {msg.sender}
                </span>
                <span className="break-words">{msg.text}</span>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input Area */}
      <div className="sticky bottom-0 bg-white/80 backdrop-blur px-4 py-3 border-t border-gray-100 rounded-b-2xl flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Type your message to ${
            activeTab === "admin" ? "Admin" : "AI Bot"
          }...`}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50"
          //   onKeyDown={(e) => {
          //     if (e.key === "Enter") handleSend();
          //   }}
        />
        <button
          // onClick={handleSend}
          onClick={() => {
            addMessageByEmail();
          }}
          className="px-6 py-2 bg-[#01356A] text-white rounded-full hover:bg-blue-700 transition font-semibold shadow"
        >
          Send
        </button>
      </div>
    </div>
  );
}
