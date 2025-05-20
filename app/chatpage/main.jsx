import React from "react";
import HeaderChat from "./headerChat";
import InputsChat from "./inputsChat";
import MainChat from "./mainChat";

const main = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-full w-[100vh] bg-green-400 justify-between">
        <MainChat />
        <InputsChat />
      </div>
    </div>
  );
};

export default main;
