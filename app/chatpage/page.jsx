// 'use clinet'

import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";
const chatPage = () => {
  return (
    <div className="h-screen w-screen fixed">
      <div className="bg-amber-200 p-x-2 h-full w-full flex gap-0.5">
        <div className="border-amber-950 border w-1/6 h-full p-2">
          <div className="h-full w-full">
            <Sidebar />
          </div>
        </div>
        <div className="border h-full w-5/6">
          <div className="relative">
            <div className=" absolute top-0 left-0">
              <button className="text-2xl p-2 cursor-pointer bg-white font-bold hover:bg-gray-300">Chat GPT</button>
            </div>
          </div>
          <div className=" h-full w-full flex justify-center">
            <Main />
          </div>
         
        </div>
        <div className="relative">
              <div className=" absolute top-0 right-3">
                <button>Chat CPG</button>
              </div>
            </div>
      </div>
    </div>
  );
};

export default chatPage;
