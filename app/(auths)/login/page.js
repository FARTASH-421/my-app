"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const handlerSubnit = async (e) => {
    e.preventDefault();

    try {
      const respos = await axios.post("./../../api/login", {
        email,
        password,
      });

      setEmail("");
      setPassword("");

      console.log(respos);
      const data = JSON.parse(respos.data);
      if (data.success) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(data.user));
        alert(data.message);

        route.push("/");
      } else {
        alert("Error! Please try again");
      }
    } catch (error) {
      const respos = error.response;
      console.log(respos);
      const data = JSON.parse(respos.data);
      alert(data.message);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="bg-amber-100 h-screen w-screen flex justify-center items-center">
      <div className="h-2/3 w-1/4 bg-gray-100 rounded-4xl p-4 shadow-2xl shadow-black">
        <div className="text-center h-full w-full flex flex-col gap-3">
          <div className="h-1/5 flex justify-center items-center">
            <h1 className="text-4xl font-bold">Login Page</h1>
          </div>
          <div className=" h-3/5 flex flex-col justify-around p-2">
            <form onSubmit={handlerSubnit} className="h-full w-full">
              <div className="h-1/4 flex flex-col items-start p-2 mt-2">
                <label
                  form="userEmail"
                  className="mb-2 px-2 text-2xl font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  placeholder="User Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full py-2 px-4 text-xl border-1 border-gray-900 rounded-4xl"
                ></input>
              </div>
              <div className="h-1/4 flex flex-col items-start p-2 mt-1">
                <label
                  form="userPassword"
                  className="mb-2 text-2xl font-bold px-4"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="userPassword"
                  placeholder="User Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full py-2 px-4 text-xl border-1 border-gray-900 rounded-4xl"
                ></input>
              </div>
              <div className="h-1/4 flex flex-col items-center justify-center p-2 mt-2 text-2xl">
                <div className="h-3/4 w-2/3 bg-blue-500 text-white flex  text-center justify-center items-center font-bold rounded-4xl hover:bg-blue-400">
                  <button>Login</button>
                </div>
              </div>
            </form>
          </div>
          <div className="1/5 flex justify-center items-center flex-col gap-2">
            <div className="h-10 w-30 flex justify-center items-center font-bold bg-amber-200 shadow-2xl shadow-black rounded-4xl text-center  hover:bg-amber-400">
              <Link href={"/register"}>SignUp</Link>
            </div>
            {/* <div>{userEmail + ": " + userName + ": " + userPassword}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
