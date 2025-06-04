"use client";

import { useState } from "react";
import ChatBox from "./components/ChatBox";

export default function ChatPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Simple Chat Box</h1>
        <ChatBox />
      </div>
    </div>
  );
}
