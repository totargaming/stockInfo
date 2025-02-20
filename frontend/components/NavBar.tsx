import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" width={40} height={40} alt="Logo" />
          <div className="hidden font-bold lg:flex space-x-4">
            <Link href="/dashboard" className="text-black hover:text-darkBlue">
              Dashboard
            </Link>
            <Link href="/about" className="text-black hover:text-darkBlue">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-darkBlue">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-black">
          <Link href="/login" className="hover:text-darkBlue">
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
