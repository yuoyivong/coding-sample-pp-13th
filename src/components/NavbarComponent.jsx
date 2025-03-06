"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavbarComponent() {
  //    using useRouter hook for navigation
  const router = useRouter();

  return (
    <div className="space-x-6 ">
      <button onClick={() => router.push("/product")}>Product</button>

      {/* using <Link> component for navigation */}
      {/* <Link href={"/product"} scroll={false}>
        Product
      </Link>
      <Link href={"/product/productList"}>Product list</Link> */}
    </div>
  );
}
