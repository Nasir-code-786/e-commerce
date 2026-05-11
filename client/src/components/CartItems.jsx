"use client";
import React, { useState } from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RxCross2 } from "react-icons/rx";


const CartItems = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="productRow flex items-center gap-5 p-5 border-b border-[rgba(0,0,0,0.1)]">
      <Link href={"product/12"} className="img w-[15%] group">
        <img
          src="/product1.png"
          alt="product image"
          className="w-full transition group-hover:scale-105"
        ></img>
      </Link>
      <div className="info flex flex-col gap-2 w-[80%]">
          <span className="text-[16px] text-gray-600">Fortune</span>
        <Link
          href={"product/12"}
          className="text-[18px] text-gray-700 font-medium hover:text-primary"
        >
          Fortune Sunlite Refined Sunflower Oil 1 L
        </Link>
        <Rating name="read-only" value={5} readOnly />
        <div className="flex items-center gap-5">
          <div className="relative">
            <Button
              className="bg-gray-200! border! border-[rgba(0,0,0,0.1)]! text-gray-700! py-0.5 px-2! capitalize!"
              onClick={handleClick}
            >
              Qty:1
              <IoMdArrowDropdown size={15} />
            </Button>
            <Menu
              id="qtyDrop"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {Array.from({ length: 15 }).map((_, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {index + 1}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <span className="text-[#C80000] text-[18px] font-semibold">
            $25.99
          </span>
          <span className="text-[#A4A4A4] text-[18px] font-semibold line-through">
            $38.10
          </span>
          <span className="text-[16px] font-semibold text-primary">
            14% OFF
          </span>
        </div>
      </div>
      <RxCross2 className="text-gray-400 hover:text-primary cursor-pointer" size={25}/>
    </div>
  );
};

export default CartItems;
