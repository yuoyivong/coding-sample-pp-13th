import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavbarComponent() {
  return (
    <div className="bg-gray-100 p-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Logo</h1>

      <ul className="flex gap-5 text-lg">
        <li className="hover:bg-blue-500 hover:text-white p-3 rounded-lg">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:bg-blue-500 hover:text-white p-3 rounded-lg">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="hover:bg-blue-500 hover:text-white p-3 rounded-lg">
          <Link href={"/product"}>Product</Link>
        </li>
      </ul>

      <div>
        <Image
          src={
            "https://i.pinimg.com/736x/76/b8/1b/76b81b12b4422f971ce02af2f65c4dad.jpg"
          }
          width={50}
          height={50}
          alt="Profile image"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
