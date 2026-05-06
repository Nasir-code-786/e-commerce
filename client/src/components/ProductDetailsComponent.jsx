"use client";
import React from "react";
import ProductZoom from "./ProductZoom";
import Rating from "@mui/material/Rating";

const ProductDetailsComponent = () => {
  return (
    <div className="flex gap-10">
      <ProductZoom />
      <div className="content">
        <h1 className="text-[25px] font-bold text-gray-800">
          Lay's American Style Cream & Onion Potato Chips 82 g
        </h1>
        <div className="flex items-center gap-4 my-4">
          <p className="text-[18px] text-gray-500 font-normal flex items-center gap-3">
            Brand: <span className="font-medium">Lay's</span>
          </p>
          <Rating name="read-only" value={4} readOnly />
          <span className="text-[18px] font-normal text-gray-800 cursor-pointer hover:text-secondary">
            Review (0)
          </span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[#C80000] text-[25px] font-bold">$25.99</span>
            <span className="text-[#A4A4A4] text-[25px] font-bold line-through">
              $38.10
            </span>
          </div>
          <p className="text-[18px] text-gray-600 flex items-center gap-3">Available In Stock:
            <span className="text-primary font-bold">74,853 Items</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
