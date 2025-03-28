// src/components/LoginComponent.jsx

import { signInAction } from "@/actions/signInAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function LoginComponent() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <Image
                src="https://shadcnblocks.com/images/block/block-1.svg"
                alt="logo"
                className="mb-7 h-10 w-auto"
                width={40}
                height={40}
              />
              <p className="mb-2 text-2xl font-bold">
                Explore our best products
              </p>
              {/* <p className="text-muted-foreground">
                Sign up in less than 2 minutes.
              </p> */}
            </div>
            <form action={signInAction}>
              <div className="grid gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <div>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  <p className="mt-1 text-sm text-muted-foreground">
                    Must be at least 8 characters.
                  </p>
                </div>
                <Button
                  type="submit"
                  className="mt-2 w-full bg-gray-800 text-white"
                >
                  Login
                </Button>
              </div>
            </form>

            {/* <Button variant="outline" className="w-full ">
              <Circle className="mr-2 size-5" />
              Sign up with Google
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
