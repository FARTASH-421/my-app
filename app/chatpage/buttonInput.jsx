import React from "react";
import { FaMicrophone, FaArrowUp, FaPaperPlane } from "react-icons/fa"; // Import specific icons
import { GrAdd } from "react-icons/gr";

const ButtonInput = ({ name }) => {
  // Map the name prop to an icon component
  const iconMap = {
    bt1: <GrAdd className="text-white text-2xl" />,
    bt2: <FaPaperPlane className="text-white text-xl" />,
    bt3: <FaMicrophone className="text-white text-xl" />,
    bt4: <FaArrowUp className="text-white text-xl font-bold" />,
  };

  const clickHandaler = () => {
    if (iconMap[name] === "bt1") {
      console.log("Hello");
    }   
  };
  return (
    <div
      className="bg-gray-500   size-10 text-center p-1 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-800"
      onClick={clickHandaler}
    >
      {iconMap[name] || <span>{name}</span>}
    </div>
  );
};

export default ButtonInput;
