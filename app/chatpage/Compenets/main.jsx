"use client";

import React, { use, useState } from "react";
// import HeaderChat from "./headerChat";
import InputsChat from "./inputsChat";
import MainChat from "./mainChat";
import axios from "axios";
import { data } from "autoprefixer";

const Main = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const callDeepSeekAPI = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.get("./../../api/login");
      console.log(JSON.parse(res.data));
      setMessages((prev) => [...prev, { sender: "bot", text: res.data }]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error: " + err.message },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-2 w-[85vh]">
        <MainChat messages={messages} />
        <InputsChat
          input={input}
          setInput={setInput}
          callDeepSeekAPI={callDeepSeekAPI}
          loading={loading}
        />
      </div>
    </div>
  );
};
export default Main;
