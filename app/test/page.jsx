"use client";

import React, { useState, useEffect, use } from "react";
import { FaStar } from "react-icons/fa";
const URL =
  "https://aiimp.chbk.app/https://aiimp.chbk.app//81e343b1-8953-4e9c-a0ae-b5459a620f02";
  
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar size={50} color={selected ? "orange" : "grey"} onClick={onSelect} />
);
const createArray = (length) => [...Array(length)];

function CreatePostForm({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
  // const [title, setTitle] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior

  //   try {
  //     console.log(title);
  //     const response = await fetch(
  //       "https://aiimp.chbk.app/https://aiimp.chbk.app//81e343b1-8953-4e9c-a0ae-b5459a620f02",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },

  //         body: JSON.stringify(title),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     setMessage(`Post created successfully with ID: ${data.id}`);
  //     setTitle("");
  //   } catch (error) {
  //     setMessage(`Error creating post: ${error.message}`);
  //     console.error("Error:", error);
  //   }
  // };

  // return (
  //   <div>
  //     <h2>Create New Post</h2>
  //     <form
  //       onSubmit={handleSubmit}
  //       className=" m-20 bg-amber-200 border  p-5 flex justify-center items-center flex-col gap-5"
  //     >
  //       <div className="bg-white border p-4 ">
  //         <label htmlFor="title">Title:</label>
  //         <input
  //           type="text"
  //           id="title"
  //           className="p-3"
  //           value={title}
  //           onChange={(e) => setTitle(e.target.value)}
  //         />
  //       </div>
  //       <button
  //         type="submit"
  //         className="bg-blue-400 py-2 px-4  rounded-2xl hover:bg-blue-600"
  //       >
  //         Submit Post
  //       </button>
  //     </form>
  //     {message && <p>{message}</p>}
  //   </div>
  // );
}

export default CreatePostForm;
