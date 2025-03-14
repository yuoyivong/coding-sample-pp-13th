"use client";
import { updateStatus } from "@/actions/productAction";
import { Heart } from "lucide-react";
import React from "react";

export default function HeartComponent({ isLike, productId }) {
  const handleOnClick = (id) => {
    console.log(id);
    updateStatus(id, !isLike);
  };

  return (
    <div className="absolute z-20 top-6 right-6 bg-white rounded-full p-2.5">
      <Heart
        size={24}
        fill={isLike ? "pink" : "white"}
        stroke={isLike ? "pink" : "black"}
        onClick={() => handleOnClick(productId)}
      />
    </div>
  );
}
