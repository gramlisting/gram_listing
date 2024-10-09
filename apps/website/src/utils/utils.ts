import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import BigNumber from "bignumber.js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatUserNumber(
  num: number | undefined,
  withSign?: boolean,
): string {
  if (!num) {
    return "";
  }

  let sign = "";
  if (withSign) {
    sign = "+";
    if (num < 0) {
      sign = "-";
    }
  }

  const bigNum = new BigNumber(Math.abs(num));

  if (bigNum.isLessThan(1000)) {
    return sign + bigNum.toString();
  } else if (bigNum.isLessThan(1_000_000)) {
    const thousands = bigNum.dividedBy(1000);
    if (thousands.mod(1).isZero()) {
      return sign + `${thousands.toString()}K`;
    } else {
      let formatted = thousands.toFixed(1, BigNumber.ROUND_DOWN).slice(0, -1);
      if (formatted.endsWith(".")) {
        formatted = formatted.slice(0, -1);
      }
      return sign + `${formatted}K`;
    }
  } else {
    const millions = bigNum.dividedBy(1_000_000);
    if (millions.mod(1).isZero()) {
      return sign + `${millions.toString()}M`;
    } else {
      let formatted = millions.toFixed(1, BigNumber.ROUND_DOWN).slice(0, -1);
      if (formatted.endsWith(".")) {
        formatted = formatted.slice(0, -1);
      }
      return sign + `${formatted}M`;
    }
  }
}
