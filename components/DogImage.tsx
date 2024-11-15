"use client";

import React from "react";
import Image from "next/image";
import LikeButton from "./LikeButton";
import { likeImage } from "@/lib/actions";

type DogImageProps = {
  src: string;
  alt: string;
};

export default function DogImage({ src, alt }: DogImageProps) {
  const [isLiked, setIsLiked] = React.useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
    likeImage();
  }

  return (
    <div
      className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
      onClick={handleLike}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-10" />
      <form action={likeImage}>
        <button
          type="submit"
          className="absolute right-2 top-2 rounded-full bg-white bg-opacity-70 p-2 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100"
        >
          <LikeButton isLiked={isLiked} />
        </button>
      </form>
    </div>
  );
}
