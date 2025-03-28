// src/components/NavbarComponent.jsx

import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import LogoutButtonComponent from "./LogoutButtonComponent";

export default async function NavbarComponent() {
  const session = await auth(); // you can access the token anywhere in your server component by just calling the auth from auth.js

  return (
    <div className="bg-pink-100 p-3 sticky top-0">
      <div className="flex justify-between container mx-auto font-medium text-lg  items-center">
        <Link href={"/"} className="hover:text-pink-600">
          Homepage
        </Link>
        <Link href={"/book"} className="hover:text-pink-600">
          Book
        </Link>

        <div>
          {/* conditional show log out or login button based on session */}
          {session?.user ? (
            <LogoutButtonComponent />
          ) : (
            <Link
              href={"/login"}
              className="bg-pink-400 text-base py-1.5 px-4 rounded-md text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
