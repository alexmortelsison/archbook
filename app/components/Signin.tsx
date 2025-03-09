/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Signin() {
  const { data: session } = useSession();
  return (
    <div>
      {!session ? (
        <Button
          className="hover:cursor-pointer"
          onClick={() => signIn("google")}
        >
          Log in
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src={session.user?.image || ""}
              alt="image"
              className="rounded-full object-cover h-10 w-10 hover:cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="hover:bg-gray-700 hover:text-white">
              <Link href={"/cart"}>Cart</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 hover:text-white">
              <p onClick={() => signOut()}>Log out</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
