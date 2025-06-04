"use client";

import React from "react";

export default function Home() {
  return (
    <>
      <div className=" absolute top-1/2 left-1/2 -translate-1/2">
        <button className=" group relative border border-gray-300 bg-white text-gray-500 text-lg px-3 py-1 rounded-3xl shadow-[0_0_150px_50px] shadow-orange-500">
          GPT Version
          <div className=" absolute top-full right-0 rounded-2xl p-3 mt-1 shadow-md flex flex-col gap-2 justify-center w-full bg-green-200 scale-0 group-focus:scale-100">
            <a className="w-full h-full hover:bg-amber-200 rounded-3xl">Home</a>
            <a className="w-full h-full hover:bg-amber-200 rounded-2xl">About</a>
            <a className="w-full h-full hover:bg-amber-200 rounded-2xl">Summary</a>
          </div>
        </button>
      </div>
    </>

    // <div className="min-h-screen bg-amber-100 flex items-center justify-center">
    //   <div className="flex flex-col gap-4 max-w p-5 rounded-[20px] bg-gray-950 shadow-orange-400 shadow-[0_0_200px_50px] text-white border border-gray-700">
    //     <p className="text-3xl font-semibold tracking-tight text-cyan-400 flex items-center pl-8 relative">
    //       Register
    //       <span className="absolute left-0 w-4 h-4 bg-cyan-400 rounded-full"></span>
    //       <span className="absolute left-0 w-4 h-4 bg-cyan-400 rounded-full animate-pulse-custom"></span>
    //     </p>
    //     <p className="text-sm text-gray-400">
    //       Signup now and get full access to our app.
    //     </p>
    //     <div className="flex w-full gap-1.5">
    //       <label className="relative flex-1">
    //         <input
    //           className="w-full p-2 pt-6 bg-gray-800 text-white border border-orange-400 rounded-lg outline-none text-base peer"
    //           type="text"
    //           placeholder=" "
    //           required
    //         />
    //         <span className="absolute left-2.5 top-0 text-sm text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-400 peer-valid:top-0 peer-valid:text-xs peer-valid:text-cyan-400 peer-valid:font-semibold">
    //           Firstname
    //         </span>
    //       </label>
    //       <label className="relative flex-1">
    //         <input
    //           className="w-full p-2 pt-6 bg-gray-800 text-white border border-gray-600 rounded-lg outline-none text-base peer"
    //           type="text"
    //           placeholder=" "
    //           required
    //         />
    //         <span className="absolute left-2.5 top-0 text-sm text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-400 peer-valid:top-0 peer-valid:text-xs peer-valid:text-cyan-400 peer-valid:font-semibold">
    //           Lastname
    //         </span>
    //       </label>
    //     </div>
    //     <label className="relative">
    //       <input
    //         className="w-full p-2 pt-6 bg-gray-800 text-white border border-gray-600 rounded-lg outline-none text-base peer"
    //         type="email"
    //         placeholder=" "
    //         required
    //       />
    //       <span className="absolute left-2.5 top-0 text-sm text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-400 peer-valid:top-0 peer-valid:text-xs peer-valid:text-cyan-400 peer-valid:font-semibold">
    //         Email
    //       </span>
    //     </label>
    //     <label className="relative">
    //       <input
    //         className="w-full p-2 pt-6 bg-gray-800 text-white border border-gray-600 rounded-lg outline-none text-base peer"
    //         type="password"
    //         placeholder=" "
    //         required
    //       />
    //       <span className="absolute left-2.5 top-0 text-sm text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-400 peer-valid:top-0 peer-valid:text-xs peer-valid:text-cyan-400 peer-valid:font-semibold">
    //         Password
    //       </span>
    //     </label>
    //     <label className="relative">
    //       <input
    //         className="w-full p-2 pt-6 bg-gray-800 text-white border border-gray-600 rounded-lg outline-none text-base peer"
    //         type="password"
    //         placeholder=" "
    //         required
    //       />
    //       <span className="absolute left-2.5 top-0 text-sm text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-400 peer-valid:top-0 peer-valid:text-xs peer-valid:text-cyan-400 peer-valid:font-semibold">
    //         Confirm password
    //       </span>
    //     </label>
    //     <button className="bg-cyan-400 text-white text-base py-2.5 rounded-lg hover:bg-cyan-500 transition-transform duration-300">
    //       Submit
    //     </button>
    //     <p className="text-sm text-gray-400 text-center">
    //       Already have an account?{" "}
    //       <a href="#" className="text-cyan-400 hover:underline">
    //         Signin
    //       </a>
    //     </p>
    //   </div>
    // </div>
  );
}
