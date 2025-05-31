"use client";

import { useRouter } from "next/navigation";
import React from "react";

const logOutPage = () => {
  const route = useRouter();
  const handlerNo = (e) => {
    e.preventDefault();
    route.push("./");
  };

  const handlerYes = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userData");
    route.push("./");
  };
  //   localStorage.setItem("isLoggedIn", "true");
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-center items-center my-10">
        <h1 className="text-4xl font-bold">Logout Page</h1>
      </div>
      <div className="w-screen h-4/5  grow flex justify-center items-center">
        <div className="h-64 w-100 bg-amber-100 shadow-2xl shadow-black rounded-2xl flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl my-8">Are You sure logout in site ? </h1>
          <div className="flex items-center justify-between flex-row gap-5 ">
            <button
              onClick={handlerNo}
              className="bg-red-300 px-10 py-2 text-xl rounded-4xl border-2 border-black hover:bg-red-500"
            >
              No
            </button>
            <button
              onClick={handlerYes}
              className="bg-green-400 px-10 py-2 text-xl rounded-4xl border-2 border-black hover:bg-green-500"
            >
              Yse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default logOutPage;
