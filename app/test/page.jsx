"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Router } from "next/navigation";
const TeatPage = () => {
  const data = [
    { id: "p1", name: "Book1", prcie: "123$" },
    { id: "p2", name: "Book2", prcie: "300$" },
    { id: "p3", name: "Book3", prcie: "500$" },
    { id: "p4", name: "Book4", prcie: "899$" },
    { id: "p5", name: "Book5", prcie: "100$" },
  ];

 

  return (
    <div className="p-3 m-4 ">
      <ul>
        {data.map((ele) => (
          <li
            key={ele.id}
            className="w-30 m-3 p-2 text-center text-2xl h-12 rounded-4xl bg-blue-400 hover:cursor-pointer hover:bg-blue-600"
          >
            <Link href={`/test/${ele.id}`}> {ele.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeatPage;
