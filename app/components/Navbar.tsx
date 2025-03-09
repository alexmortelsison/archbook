"use client";
import { BsHouseHeart } from "react-icons/bs";
import Link from "next/link";
import Signin from "./Signin";
import { ShoppingBagIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Navlinks from "./Navlinks";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="border-t border-b py-8 justify-between flex items-center">
        <Link href={"/"} className="text-white font-extrabold text-4xl">
          <div className="flex items-center">
            <BsHouseHeart />
            archbook
          </div>
        </Link>
        <Navlinks />
        <div className="flex items-center relative space-x-4">
          <Signin />
          <Link href={"/cart"}>
            <ShoppingBagIcon className="text-white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-0 -right-3 text-white bg-red-500 rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
