'use client'

import React from "react";
import ButtonInput from "./buttonInput";
const inputsChat = () => {
  return (
    <div className="w-full h-46 flex flex-col">
      <div className="h-full w-full">
        <div className="h-full w-full rounded-4xl shadow-[0_0_5px_black]">
          <div className="p-4 h-3/5">
            <input
              type="text"
              placeholder="Ask anything"
              className="w-full h-full border-none focus:outline-none px-1 py-6 text-xl font-sans"
            />
          </div>
          <div className="h-2/5 w-full flex justify-between px-6 items-center">
            <div className="flex gap-6 h-full  justify-center items-center">
              <ButtonInput name="bt1" />
              <ButtonInput name="bt2" />
            </div>
            <div className="flex gap-6 h-full  justify-center items-center ">
              <ButtonInput name="bt3" />
              <ButtonInput name="bt4" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-[15px] h-15">
        <p>ChatGPT can make mistakes. Check important info.</p>
      </div>
    </div>
  );
};

export default inputsChat;
