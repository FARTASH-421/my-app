"use client";

import React, { useEffect, useState } from "react";
// import HeaderChat from "./headerChat";
import InputsChat from "./inputsChat";
import MainChat from "./mainChat";
import axios from "axios";
import { data } from "autoprefixer";

const Main = () => {
  // const loginFlag = localStorage.getItem("isLoggedIn"); //  Check localStorage
  // console.log(loginFlag);
  // useEffect(() => {
  //   if (loginFlag === "null") return <h1> You shod log in</h1>;
  // }, []);

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const callDeepSeekAPI = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add user message
    // 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
    // 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
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      console.log(input);

      // First API call with reasoning
      let response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "x-ai/grok-4.1-fast:free",
            messages: [
              {
                role: "user",
                content: input,
              },
            ],
            reasoning: { enabled: true },
          }),
        }
      );

      // Extract the assistant message with reasoning_details and save it to the response variable
      const result = await response.json();
      console.log(result);
      response = result.choices[0].message;
      console.log(response);

      // const res = await axios.get("./../../api/login");
      console.log(response.content);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: response.content },
      ]);
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
