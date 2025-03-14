import { getProductById } from "@/services/productService";
import Image from "next/image";
import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  const product = await getProductById(id);
  console.log("Product : ", product);

  return (
    <div className="flex gap-10 justify-center">
      <Image
        src={product?.payload?.image}
        alt={product?.payload?.product_name}
        width={400}
        height={400}
        className="rounded-2xl"
      />

      <div>
        <h1 className="text-3xl font-bold uppercase">
          {product?.payload?.product_name}
        </h1>
        <p>{product?.payload?.description || "No Description"}</p>
        <p className="pt-10 font-bold text-xl text-red-700">
          $ {product?.payload?.price}
        </p>
      </div>
    </div>
  );
}
