// 'use clinet'
import { GrFormDown } from "react-icons/gr";
import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";
import ProfileChat from "./profileChat";
const chatPage = () => {
  return (
    <div className="h-screen w-screen fixed">
      <div className="p-x-2 h-full w-full flex gap-0.5">
        <div className="border-amber-950 border w-1/6 h-full p-2">
          <div className="h-full w-full">
            <Sidebar />
          </div>
        </div>
        <div className="border h-full w-5/6">
          <div className="relative">
            <div className=" absolute top-0 left-0">
              <button className="text-[1.2rem] px-4 py-2 cursor-pointer hover:bg-gray-100 m-2 hover:rounded-xl flex gap-2 justify-center items-center">
                ChatGPT
                <GrFormDown className="text-center text-black" />
              </button>
            </div>
          </div>
          <div className=" h-full w-full flex justify-center">
            <Main />
          </div>
        </div>
        <ProfileChat />
      </div>
    </div>
  );
};

export default chatPage;
