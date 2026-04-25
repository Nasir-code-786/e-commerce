import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search group bg-white w-80 h-12 rounded-full px-4 relative flex items-center border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-lg focus-within:border-primary">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-full outline-none border-0 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:placeholder:opacity-0 transition-all duration-200"
      />
      <button className="w-9 h-9 rounded-full absolute right-1.5 flex items-center justify-center cursor-pointer transition-all duration-300 bg-gray-100 group-hover:bg-primary group-hover:text-white">
        <IoSearchOutline
          size={20}
          className="text-gray-600 transition-all duration-300 group-hover:text-white group-hover:scale-110"
        />
      </button>
      <div className="absolute inset-0 rounded-full pointer-events-none group-hover:ring-1 group-hover:ring-primary/20 transition"></div>
    </div>
  );
};

export default Search;
