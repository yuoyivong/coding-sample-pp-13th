import CardComponent from "@/components/CardComponent";
import { getAllProducts } from "@/services/productService";
import Image from "next/image";
import React from "react";

export default async function page() {
  const products = await getAllProducts();
  console.log(products);

  return (
    <div className="grid grid-cols-4 gap-6 place-items-center">
      {products?.payload?.map((product) => (
        <div key={product?.product_id}>
          <CardComponent product={product} />
        </div>
      ))}
    </div>
  );
}
