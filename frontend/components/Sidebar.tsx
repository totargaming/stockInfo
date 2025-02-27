import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

interface Props {
  ticker: string;
}

const Sidebar = ({ ticker }: Props) => {
  return (
    <nav className="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex-col md:relative md:translate-x-0 -translate-x-full transition-all duration-300 ease-in-out">
      <div className="flex-col min-h-full flex items-center justify-between w-full overflow-y-auto">
        <div className="flex flex-col w-full">
          <Link
            href={`/company/${ticker}/profile`}
            className="flex items-center text-blueGray-500 uppercase font-bold py-4 px-2 no-underline"
          >
            <FaHome className="mr-2" />
            <span className="text-sm">Company Profile</span>
          </Link>
          <Link
            href={`/company/${ticker}/income-statement`}
            className="flex items-center text-blueGray-500 uppercase font-bold py-4 px-2 no-underline"
          >
            <MdDescription className="mr-2" />
            <span className="text-sm">Income Statement</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
