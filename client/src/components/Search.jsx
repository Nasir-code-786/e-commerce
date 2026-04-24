import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search bg-[#E6E6E6] w-80 h-13 rounded-md px-4 relative">
      <input
        type="text"
        className="w-full h-full outline-none border-0"
        placeholder="Search for products..."
      ></input>
      <button className="w-10 h-10 rounded-full absolute top-2 right-2 z-50 flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <IoSearchOutline size={25} />
      </button>
    </div>
  );
};

export default Search;
