"use client";

import { GoCopy } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import React, { useRef, useEffect } from "react";
import { FaShareFromSquare } from "react-icons/fa6";

const MainChat = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="w-full p-2 h-full">
      <div className="space-y-4 p-2 pb-36">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center">Start a conversation...</p>
        )}

        {messages.map((msg, index) => (
          <div key={index}>
            <div
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w px-4 py-2 flex flex-col rounded-lg break-words whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-amber-50 text-black max-w-[95%]"
                    : "bg-gray-100 text-gray-800 max-w-[95%]"
                }`}
              >
                {msg.text}
              </div>
            </div>
            {!(msg.sender === "user") ? (
              <div className="flex flex-wrap p-2">
                <div className="hover:bg-gray-200 py-1 px-2 rounded hover:cursor-pointer">
                  <GoCopy className="text-xl" />
                </div>
                <div className="hover:bg-gray-200 hover:cursor-pointer py-1 px-2 rounded">
                  <AiOutlineLike className="text-2xl" />
                </div>
                <div className="hover:bg-gray-200 hover:cursor-pointer py-1 px-2 rounded">
                  <AiOutlineDislike className="text-2xl" />
                </div>
                <div className="hover:cursor-pointer hover:bg-gray-200 rounded py-1 px-2">
                  <FaShareFromSquare className="text-xl" />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MainChat;
