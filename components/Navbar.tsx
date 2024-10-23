"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center py-6 px-6">
      <div className="space-x-6  text-black font-roboto font-medium text-2xl">
        <Link
          href={"/"}
          className="  hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-red-500"
        >
      Home
        </Link>
        <Link
          href={"/work"}
          className=" hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-red-500"
        >
          Work
        </Link>
        <Link
          href={"/blogs"}
          className="hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-red-500"
        >
          Blogs
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-red-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
