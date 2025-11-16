import React from "react";
import { GrMoreVertical } from "react-icons/gr";
import { RiShare2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const profileChat = () => {
  return (
    <div className=" relative">
      <div className=" absolute top-0 right-3 w-50">
        <div className="flex justify-evenly p-2 items-center">
          <div>
            <button className="flex gap-1 justify-center items-cente px-3 py-1 border-1 border-black rounded-3xl hover:bg-gray-200  ">
              <RiShare2Line className="text-center text-xl" />
              <p>Share</p>
            </button>
          </div>
          <div className=" h-10 text-center w-8 rounded-4xl hover:bg-gray-200 flex justify-center items-center">
            <GrMoreVertical className="text-2xl text-center" />
          </div>
          <div className="p-2 hover:bg-blue-400 rounded-full">
            <Link href={"/profile"}>
              <CgProfile className="text-3xl text-center" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileChat;
