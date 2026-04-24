import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="py-4">
      <div className="container flex items-center justify-between gap-5">
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Fruits & Vegetables
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Meats & Seafood
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Breaksfast & Dairy
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Breads & Bakery
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Beverages
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Frozen Foods
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Biscuits & Snacks
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-semibold hover:text-primary"
        >
          Grocery & Staples
        </Link>
        <div className="relative group">
          <span className="text-[17px] text-gray-800 font-semibold hover:text-primary flex items-center gap-1 cursor-pointer">
            More
            <MdKeyboardArrowDown size={25} />
          </span>
          <div className="dropdown-menu flex flex-col absolute top-full right-0 bg-white shadow-md rounded-md overflow-hidden w-50 invisible opacity-0 transition group-hover:opacity-100 group-hover:visible pt-4">
            <Link
              href="/"
              className="text-[16px] text-gray-800 font-semibold hover:text-primary flex py-2 px-4"
            >
              Grocery & Staples
            </Link>
            <Link
              href="/"
              className="text-[16px] text-gray-800 font-semibold hover:text-primary flex py-2 px-4"
            >
              Grocery & Staples
            </Link>
            <Link
              href="/"
              className="text-[16px] text-gray-800 font-semibold hover:text-primary flex py-2 px-4"
            >
              Grocery & Staples
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
