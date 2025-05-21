"use client";
import React, { useRef, useState } from "react";

const page = () => {
  const userNameRef = useRef();
  const userEmailRef = useRef();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handlerName = async (event) => {
    event.preventDefault();
    console.log(userNameRef.current.value);
    console.log(userEmailRef.current.value);

    setUserName(userNameRef.current.value);
    setUserEmail(userEmailRef.current.value);
    const data = { userName, userEmail };

    const respose = await fetch("www.homde.com", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const myData = await respose.json();
    console.log(myData);
  };

  return (
    <div>
      <h1 className="m-4 p-2 text-4xl font-bold">Home Page</h1>
      <form onSubmit={handlerName} className="bg-blue-950 p-4 w-1/2">
        <div className="flex flex-col rounded-3xl bg-blue-200 justify-center p-4 m-10">
          <label htmlFor="userName" className="text-2xl font-bold">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            ref={userNameRef}
            placeholder="Ali"
            className="text-2xl p-2 outline-pink-400 "
          />
        </div>
        <div className="flex flex-col rounded-3xl bg-blue-200 justify-center p-4 m-10">
          <label htmlFor="userEmail" className="text-2xl font-bold">
            Email address
          </label>
          <input
            type="email"
            id="userEmail"
            ref={userEmailRef}
            placeholder="example@gmil.com"
            className="text-2xl p-2 outline-pink-400 "
          />
        </div>
        <button className="mx-10 my-3 bg-red-400 px-8 py-2 rounded-4xl text-2xl active:bg-amber-600">
          Add
        </button>
      </form>

      <div className="bg-red-200 m-5 p-2 rounded-3xl flex flex-col gap-4">
        {userName !== "" ? (
          <div className="text-2xl font-black bg-gree">{userName}</div>
        ) : (
          <div>
            <div className="text-2xl font-black">User Name is Empty</div>
          </div>
        )}
        {userEmail !== "" ? (
          <div className="text-2xl font-black">{userEmail}</div>
        ) : (
          <div>
            <div className="text-2xl font-black">User Name is Empty</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
