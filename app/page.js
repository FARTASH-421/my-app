"use client";

import { useRouter } from "next/navigation";
import HeaderSide from "./component/header";
import FooterSide from "./component/footer";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginFlag = localStorage.getItem("isLoggedIn"); //  Check localStorage
    if (loginFlag === "true") {
      setIsLoggedIn(true); // Update state
    }
  }, []);
  const handelerClick = () => {
    router.push("/chatpage");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="mb-18">
        <HeaderSide />
      </header>
      <main className="flex-grow bg-amber-50 ">
        <div className="px-10 py-5 h-full w-full">
          <h1 className="text-4xl font-bold mb-4">Home Page</h1>

          <div className="flex justify-center items-center h-full flex-col gap-4">
            {isLoggedIn ? (
              <button
                className="bg-blue-400 px-6 py-3 rounded-3xl text-2xl hover:bg-blue-600 transition duration-200"
                onClick={handelerClick}
              >
                Chat Message
              </button>
            ) : (
              <h1 className=" text-4xl p-4 rounded-2xl bg-blue-200 text-red-600 ">
                If you want to use{" "}
                <span className="text-black text-5xl italic font-bold">chat bot</span>{" "}
                please login in to website...
              </h1>
            )}
          </div>
        </div>
      </main>
      <FooterSide className="w-full" />
    </div>
  );
}
