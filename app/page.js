"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page(props) {
  const router = useRouter();
  // const [count, setCount] = useState(0);

  const handelerClick = () => {
    router.push("/chatpage");
  };

  return (
    <div className="h-screen w-screen">
      <div className="bg-amber-200 p-4 h-full w-full">
        <h1 className="h-1/12 text-4xl font-bold">Home Page</h1>
        <div className="relative h-11/12">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 px-4 py-2  rounded-3xl text-2xl hover:bg-blue-600 hover:cursor-pointer">
            <button className="hover:cursor-pointer" onClick={handelerClick}>
              Chat Massage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
