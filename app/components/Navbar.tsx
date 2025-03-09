import { BsHouseHeart } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="border-t border-b py-8">
        <Link href={"/"} className="text-white font-extrabold text-4xl">
          <div className="flex items-center">
            <BsHouseHeart />
            archbook
          </div>
        </Link>
      </div>
    </div>
  );
}
