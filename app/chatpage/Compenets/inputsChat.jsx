"use client";

import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";
import { FaMicrophone } from "react-icons/fa6";

import { FaCircleArrowUp } from "react-icons/fa6";

export default function InputsChat({
  input,
  setInput,
  callDeepSeekAPI,
  loading,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      callDeepSeekAPI(e);
    }
  };

  return (
    <div className="bg-white h-[15%] w-[85vh] fixed bottom-0">
      <div className="flex flex-col w-full gap-3 h-3/4 shadow shadow-black/20 rounded-3xl py-4 px-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 h-1/2 p-2 rounded focus:outline-none text-xl overflow-y-auto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div className="h-1/2 w-full flex flex-row-reverse p-2 justify-between items-center gap-y-2">
          <div className="flex flex-row justify-center items-center gap-x-2">
            <div className="flex justify-center items-center py-1 px-3 rounded-2xl hover:bg-gray-100">
              <FaMicrophone className="text-2xl" />
            </div>
            <div className="flex justify-center items-center py-1 rounded-3xl hover:bg-gray-100">
              <button
                onClick={callDeepSeekAPI}
                disabled={loading}
                className="text-3xl px-3"
              >
                {loading ? "..." : <FaCircleArrowUp />}
              </button>
            </div>
          </div>
          <div className="flex gap-x-4 ">
            <div className="text-2xl px-3 rounded-2xl hover:bg-gray-100 flex justify-center items-center">
              <IoAddSharp className="text-3xl" />
            </div>
            <div className=" flex flex-row justify-center text-xl items-center px-2 rounded-2xl py-1 hover:bg-gray-100 hover:cursor-pointer">
              <CgOptions className="text-2xl" />
              <h1>tools</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/4 flex justify-center items-center text-center text-sm">
        <p>ChatGPT can make mistakes. Check important info.</p>
      </div>
    </div>
  );
}
