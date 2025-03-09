import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navlinks() {
  return (
    <div className="flex space-x-4 flex-1 justify-end pr-8">
      {navLinks.map((item) => (
        <Link href={item.href} key={item.href} className="flex">
          <p className="text-white">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
