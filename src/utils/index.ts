import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colors = ["bg-rose-500", "bg-indigo-500", "bg-yellow-500"];

const textColors = ["text-rose-400", "text-indigo-400", "text-yellow-400"];

const fillColors = ["fill-rose-500", "fill-indigo-500", "fill-yellow-500"];

const strokeColors = [
  "stroke-rose-500",
  "stroke-indigo-500",
  "stroke-yellow-500",
  "stroke-rose-200",
  "stroke-indigo-200",
  "stroke-yellow-200",
];

function getRandomItem(arr: string[]) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

export function generateColor() {
  return getRandomItem(colors);
}

export function generateColorArray(maxLength: number) {
  let colorArray: string[] = [];
  for (let i = 0; i < maxLength; i++) {
    colorArray.push(generateColor());
  }
  return colorArray;
}
