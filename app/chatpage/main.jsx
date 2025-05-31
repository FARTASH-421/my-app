"use client";

import React, { use, useState } from "react";
// import HeaderChat from "./headerChat";
import InputsChat from "./inputsChat";
import MainChat from "./mainChat";

const main = () => {
  const [inputData, setInputData] = useState("");
  const [response, setResponse] = useState("For test");

  const callDeepSeekAPI = async () => {
    console.log(inputData);
    console.log(response);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer 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`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "user",
              content: inputData,
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      // OpenRouter response structure is different from Gemini
      const text = data.choices?.[0]?.message?.content || "No response";
      setResponse(text);
    } catch (err) {
      console.error("Error calling DeepSeek API:", err);
      setResponse([...("❌ Error: " + err.message)]);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-full w-[85vh] justify-between">
        <MainChat response={response} />
        <InputsChat
          setInputData={setInputData}
          callDeepSeekAPI={callDeepSeekAPI}
        />
      </div>
    </div>
  );
};

export default main;
