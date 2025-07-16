// 'use clinet'
import { GrFormDown } from "react-icons/gr";
import React from "react";
import MySidebar from "./Compenets/sidebar";
import Main from "./Compenets/main";
import ProfileChat from "./Compenets/profileChat";
import Link from "next/link";
const chatPage = () => {
  return (
    <div className="h-screen w-screen">
      <div className="p-x-2 h-full w-full flex gap-0.5">
        <div className="border-amber-950 border w-1/6 h-full">
          <MySidebar />
        </div>
        <div className="border h-full w-5/6">
          <div className="relative">
            <div className=" absolute top-0 left-0">
              <button className="group relative text-[1.2rem] px-4 py-2 cursor-pointer hover:bg-gray-100 m-2 hover:rounded-xl flex gap-2 justify-center items-center">
                ChatGPT
                <GrFormDown className="text-center text-black" />
                <div className=" absolute top-full right-0 rounded-2xl p-3 mt-1 shadow-md flex flex-col gap-2 justify-center w-full bg-gray-100 scale-0 group-focus:scale-100">
                  <Link
                    href={"#"}
                    className="w-full h-full hover:bg-amber-200 rounded-xl"
                  >
                    version 4.1
                  </Link>
                  <Link
                    href={"#"}
                    className="w-full h-full hover:bg-amber-200 rounded-xl"
                  >
                    version 3.1
                  </Link>
                  <Link
                    href={"#"}
                    className="w-full h-full hover:bg-amber-200 rounded-xl"
                  >
                    version 2.1
                  </Link>
                </div>
              </button>
            </div>
          </div>
          <div className="h-full w-full flex justify-center overflow-y-auto">
            <Main />
          </div>
        </div>
        <ProfileChat />
      </div>
    </div>
  );
};

export default chatPage;
