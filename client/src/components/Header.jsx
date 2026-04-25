import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

import Nav from "./Nav";

const Header = () => {
  return (
    <div className="headerWrapper bg-[#FAFAFA]">
      <header className="border-b border-[rgba(0,0,0,0.1)] py-3">
        <div className="container flex items-center justify-between h-14">
          <div className="logo flex items-center">
            <Link href="/" className="group">
              <Image
                src="/my-logo.png"
                width={140}
                height={45}
                alt="logo"
                className="h-10 w-auto group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Search />
            <div className="flex items-center gap-5 text-sm">
                <Link href="/register" className="group">
                <FiUserPlus
                    size={24}
                    className="text-gray-700 transition group-hover:text-primary group-hover:scale-110"
                />
                </Link>
              <Link href="/login" className="group">
                <MdLogin
                  size={24}
                  className="text-gray-700 hover:text-primary transition group-hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/wishlist" className="relative flex items-center">
                <span className="bg-primary w-5 h-5 text-white text-xs rounded-full flex items-center justify-center absolute -top-2 -right-2">
                  3
                </span>
                <FaRegHeart
                  size={24}
                  className="text-gray-700 hover:text-primary transition"
                />
              </Link>
              <Link href="/cart" className="relative flex items-center">
                <span className="bg-primary w-5 h-5 text-white text-xs rounded-full flex items-center justify-center absolute -top-2 -right-2">
                  3
                </span>
                <IoCartOutline
                  size={28}
                  className="text-gray-700 hover:text-primary transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </div>
  );
};

export default Header;
