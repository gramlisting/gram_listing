"use client";

import React, { useState } from "react";
import { ThumbsUp } from "lucide-react";

const VoteButton = () => {
  const [isVoted, setIsVoted] = useState(false);
  const [count, setCount] = useState(123);

  const handleClick = () => {
    setIsVoted(!isVoted);
    setCount(isVoted ? count - 1 : count + 1);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex h-12 w-12 flex-col items-center justify-center rounded-sm border
       ${isVoted ? "border-orange-600" : "border-gray-600"}
       `}
    >
      <div className={`flex h-4 w-4 items-center justify-center`}>
        <ThumbsUp
          size={32}
          // color={`${isVoted ? "#orange-600" : "#gray-600"}`}
          color={`${isVoted ? "#ea580c" : "#4b5563"}`}
          strokeWidth={1.25}
        />
      </div>
      <span
        className={`mt-1 text-sm font-semibold 
      
      dark:text-gray-400   
      
      ${isVoted ? "font-bold text-black dark:text-white" : " text-gray-800 dark:text-gray-400 "}
      
      `}
      >
        {count}
      </span>
    </button>
  );
};

export default VoteButton;
