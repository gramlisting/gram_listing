"use client";

import React, { useState } from "react";
import { ThumbsUp } from "lucide-react";
import BigNumber from "bignumber.js";

interface CategoryDetailProps {
  type: "project" | "gem";
  initCount: number;
}

export default function VoteButton({ type, initCount }: CategoryDetailProps) {
  const [isVoted, setIsVoted] = useState(false);
  const [count, setCount] = useState(initCount);

  const handleClick = () => {
    setIsVoted(!isVoted);
    setCount(isVoted ? count - 1 : count + 1);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex h-12 w-12 flex-col items-center justify-center rounded-sm border
       ${isVoted ? "border-destructive" : "border-gray-600"}
       `}
    >
      <div className={`flex h-4 w-4 items-center justify-center`}>
        <ThumbsUp
          size={32}
          // color={`${isVoted ? "#orange-600" : "#gray-600"}`}
          // color={`${isVoted ? "#ea580c" : "#4b5563"}`}
          className={`${isVoted ? "text-destructive" : "text-white"}`}
          strokeWidth={1.25}
        />
      </div>
      <span
        className={`mt-1 text-sm font-semibold 
      dark:text-gray-400   
      ${isVoted ? "font-bold text-black dark:text-white" : " text-gray-800 dark:text-gray-400 "}
      `}
      >
        {formatNumber(count)}
      </span>
    </button>
  );
}
function formatNumber(num: number): string {
  const bigNum = new BigNumber(num);

  if (bigNum.isLessThan(1000)) {
    return bigNum.toString();
  } else if (bigNum.isLessThan(1_000_000)) {
    const thousands = bigNum.dividedBy(1000);
    if (thousands.mod(1).isZero()) {
      return `${thousands.toString()}K`;
    } else {
      const formatted = thousands.toFixed(2, BigNumber.ROUND_DOWN).slice(0, -1);
      return `${formatted}K`;
    }
  } else {
    const millions = bigNum.dividedBy(1_000_000);
    if (millions.mod(1).isZero()) {
      return `${millions.toString()}M`;
    } else {
      const formatted = millions.toFixed(2, BigNumber.ROUND_DOWN).slice(0, -1);
      return `${formatted}M`;
    }
  }
}
