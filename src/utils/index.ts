import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colors = [
  "bg-sky-600",
  "bg-rose-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-fuchsia-600",
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
