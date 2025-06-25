"use client";
import React, { useEffect, useState } from "react";
import { database } from "@/lib/firebaseConfig";
import { ref, onValue, push, update } from "firebase/database";
import MainFormHeadder from "@/components/MainFormHeadder";

function AdminChat() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch users from Firebase
  useEffect(() => {
    const usersRef = ref(database, "users");
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {};
      const userList = Object.entries(data).map(([id, user]) => ({
        id,
        ...user,
      }));
      setUsers(userList);
    });
    return () => unsubscribe();
  }, []);

  // Fetch messages for selected user
  useEffect(() => {
    if (!selectedUserId) return;
    const userRef = ref(database, `users/${selectedUserId}/messages`);
    const unsubscribe = onValue(userRef, (snapshot) => {
      const msgs = snapshot.val() || [];
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, [selectedUserId]);

  // Send message to selected user
  const sendMessage = async () => {
    if (!selectedUserId || !newMessage.trim()) return;
    const userRef = ref(database, `users/${selectedUserId}/messages`);
    const adminMsg = { sender: "Admin", text: newMessage };
    const updatedMessages = [...messages, adminMsg];
    await update(ref(database, `users/${selectedUserId}`), {
      messages: updatedMessages,
    });
    setNewMessage("");
  };

  return (
    <div className="bg-[#01356A] min-h-screen flex items-center justify-center">
      <MainFormHeadder />
      <div className="w-full max-w-5xl h-[80vh] bg-white rounded-3xl shadow-2xl flex overflow-hidden border-4 border-[#01356A] mt-8">
        {/* User List (Tabs) */}
        <div className="w-1/4 bg-white flex flex-col items-center py-6 px-2 border-r-2 border-[#01356A]">
          <h2 className="text-[#01356A] text-xl font-bold mb-6 tracking-wide">
            Users
          </h2>
          <div className="w-full flex-1 overflow-y-auto">
            {users.map((user) => (
              <div
                key={user.id}
                className={`w-full mb-2 rounded-xl px-3 py-3 cursor-pointer text-sm font-semibold transition-all duration-150 text-left shadow-sm border-2 flex items-center gap-2 ${
                  selectedUserId === user.id
                    ? "bg-[#01356A] text-white border-[#01356A] scale-105"
                    : "bg-[#f1f5fa] text-[#01356A] border-transparent hover:bg-[#e6ecf7] hover:border-[#01356A]"
                }`}
                onClick={() => setSelectedUserId(user.id)}
              >
                <span className="truncate block">{user.email}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Chat Box */}
        <div className="w-3/4 flex flex-col h-full">
          <div className="flex-shrink-0 border-b border-[#01356A]/30 px-8 py-4 bg-white rounded-tr-3xl">
            <h2 className="text-[#01356A] text-2xl font-bold text-center">
              Chat with Admin
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-3 bg-gradient-to-br from-white to-[#e6ecf7]">
            {selectedUserId ? (
              messages.length === 0 ? (
                <div className="text-gray-400 text-center my-20">
                  No messages yet.
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.sender === "Admin" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-5 py-3 shadow-md max-w-xs md:max-w-md break-words flex flex-col items-start ${
                        msg.sender === "Admin"
                          ? "bg-[#01356A] text-white items-end rounded-br-none"
                          : "bg-gray-100 text-[#01356A] items-start rounded-bl-none"
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold mb-1 ${
                          msg.sender === "Admin"
                            ? "text-white/80"
                            : "text-[#01356A]/80"
                        }`}
                      >
                        {msg.sender === "Admin" ? "You" : msg.sender || "User"}
                      </span>
                      <span className="text-base">{msg.text || msg}</span>
                    </div>
                  </div>
                ))
              )
            ) : (
              <div className="text-gray-400 text-center my-20 text-lg">
                Select a user to start chatting.
              </div>
            )}
          </div>
          {/* Input */}
          {selectedUserId && (
            <div className="flex gap-2 px-8 py-4 bg-white border-t border-[#01356A]/20">
              <input
                className="flex-1 border border-[#01356A] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#01356A]/40 bg-white text-[#01356A] shadow"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message to Admin..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="bg-[#01356A] text-white px-8 py-3 rounded-full font-bold shadow hover:bg-[#01234A] transition-all duration-200 text-lg"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminChat;
