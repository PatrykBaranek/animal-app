import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface LikeButtonProps {
  isLiked: boolean;
  className?: string;
}

export default function LikeButton({ isLiked, className }: LikeButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={twMerge(
        "h-6 w-6",
        clsx({
          "fill-red-500 text-red-500": isLiked,
          "fill-none text-gray-500": !isLiked,
        }),
        className,
      )}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}
