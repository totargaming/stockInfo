import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" width={40} height={40} alt="Logo" />
          <div className="hidden font-bold lg:flex">
            <Link href="/dashboard">
              <p className="text-black hover:text-darkBlue">Dashboard</p>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4 text-black">
          <div className="hover:text-darkBlue">Login</div>
          <Link href="/signup">
            <p className="px-4 py-2 font-bold rounded text-white bg-lightGreen hover:opacity-70">
              Signup
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
