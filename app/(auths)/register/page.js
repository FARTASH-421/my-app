"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUpPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const route = useRouter();
  const handlerSubnit = async (e) => {
    e.preventDefault();
    // console.log(userName + " " + userEmail + " " + userPassword);
    try {
      const respos = await axios.post("./../../api/register", {
        userName,
        userEmail,
        userPassword,
      });

      setUserEmail("");
      setUserName("");
      setUserPassword("");
      const data = JSON.parse(respos.data);
      if (data.success) {
        alert(data.message);
        route.push("./login");
      } else {
        alert("Error! Please try again");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-amber-100 h-screen w-screen flex justify-center items-center">
      <div className="h-2/3 w-1/4 bg-gray-100 rounded-4xl p-4 shadow-2xl shadow-black">
        <div className="text-center h-full w-full flex flex-col gap-3">
          <div className="h-1/5 flex justify-center items-center">
            <h1 className="text-4xl font-bold">SignUp Page</h1>
          </div>
          <div className=" h-3/5 flex flex-col justify-around p-2">
            <form onSubmit={handlerSubnit} className="h-full w-full">
              <div className="h-1/4 flex flex-col items-start p-2 mt-2">
                <label form="userName" className="mb-2 px-4 text-2xl font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  placeholder="User name"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  className="w-full py-2 px-4  text-xl border-1 border-gray-900 rounded-4xl "
                ></input>
              </div>
              <div className="h-1/4 flex flex-col items-start p-2 mt-1">
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
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
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
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  className="w-full py-2 px-4 text-xl border-1 border-gray-900 rounded-4xl"
                ></input>
              </div>
              <div className="h-1/4 flex flex-col items-center justify-center p-2 mt-2 text-2xl">
                <div className="h-3/4 w-2/3 bg-blue-500 text-white flex  text-center justify-center items-center font-bold rounded-4xl hover:bg-blue-400">
                  <button type="submit">SignUp</button>
                </div>
              </div>
            </form>
          </div>
          <div className="1/5 flex justify-center items-center flex-col gap-2">
            <div className="h-10 w-30 flex justify-center items-center font-bold bg-amber-200 shadow-2xl shadow-black rounded-4xl text-center  hover:bg-amber-400">
              <Link href={"/login"}>Login</Link>
            </div>
            {/* <div>{userEmail + ": " + userName + ": " + userPassword}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
