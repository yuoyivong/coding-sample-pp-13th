import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeartComponent from "./HeartComponent";

export default function CardComponent({ product }) {
  return (
    <>
      <div className="bg-white p-5 rounded-2xl my-12 shadow-md relative">
        <Link href={`/product/${product?.product_id}`}>
          <div className="relative w-64 h-70 flex justify-center">
            <Image
              src={product?.image}
              alt={product?.product_name}
              fill
              className="rounded-xl mb-2"
            />
          </div>

          <div className="bg-pink-400 text-white mt-2.5 rounded-lg p-2.5">
            <h2 className="font-bold text-2xl capitalize">
              {product?.product_name}
            </h2>
            <p className="text-lg font-semibold">
              {product?.description || "No Description"}
            </p>
            <p className="text-lg font-semibold">$ {product?.price}</p>
          </div>
        </Link>

        {/* heart icon */}
        <HeartComponent
          isLike={product?.is_like}
          productId={product?.product_id}
        />
      </div>
    </>
  );
}
