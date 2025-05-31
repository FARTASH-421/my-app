import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeaderSide = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const loginFlag = localStorage.getItem("isLoggedIn");
    const dataFlag = JSON.parse(localStorage.getItem("userData"));

    if (loginFlag === "true") {
      setIsLoggedIn(true); // Update state
      setUserInfo(dataFlag.userName);
    }
  }, []);
  return (
    <div>
      <header className="bg-amber-100 fixed w-full">
        <div className="mx-auto flex h-20 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-40 shadow-lg shadow-yellow-500/20">
          <Link
            className="block hover:border-b-3 hover:border-b-blue-700"
            href="/"
          >
            <span className="text-xl">Home</span>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-xl">
                <li>
                  <a
                    className=" transition hover:border-b-3 hover:border-b-blue-700"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=" transition hover:border-b-3 hover:border-b-blue-700"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=" transition hover:border-b-3 hover:border-b-blue-700"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=" transition hover:border-b-3 hover:border-b-blue-700"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=" transition hover:border-b-3 hover:border-b-blue-700"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=" transition hover:border-b-3 hover:border-b-blue-700"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-blue-600 px-5 py-2.5 text-xl font-medium text-white transition hover:bg-blue-800"
                    href="./../logout"
                  >
                    Logout
                  </Link>
                  <div className="flex justify-center items-center py-2 px-6 bg-amber-400 rounded-2xl border-1">
                    <h1 className="text-2xl">{userInfo}</h1>{" "}
                  </div>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-blue-600 px-5 py-2.5 text-xl font-medium text-white transition hover:bg-blue-800"
                    href="./../login"
                  >
                    Login
                  </Link>

                  <Link
                    className="hidden rounded-md bg-blue-600 px-5 py-2.5 text-xl font-medium text-white transition hover:bg-blue-800 sm:block"
                    href="./../register/"
                  >
                    Register
                  </Link>
                </div>
              )}

              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                {/* <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg> */}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSide;
