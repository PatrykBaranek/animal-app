import React from "react";

interface LikeButtonProps {
  isLiked: boolean;
  className?: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : "fill-none text-gray-500"} ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};

export default LikeButton;
