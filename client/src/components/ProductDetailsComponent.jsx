"use client";
import React, { useState } from "react";
import ProductZoom from "./ProductZoom";
import Rating from "@mui/material/Rating";
import QtyBox from "./QtyBox";
import { Button } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

const ProductDetailsComponent = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);

  return (
    <>
      <div className="flex gap-10 items-start">
        <ProductZoom />
        <div className="content">
          <h1 className="text-[30px] font-bold text-gray-800">
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
              <span className="text-[#C80000] text-[25px] font-bold">
                $25.99
              </span>
              <span className="text-[#A4A4A4] text-[25px] font-bold line-through">
                $38.10
              </span>
            </div>
            <p className="text-[18px] text-gray-600 flex items-center gap-3">
              Available In Stock:
              <span className="text-primary font-bold">74,853 Items</span>
            </p>
          </div>
          <p className="text-[15px] text-gray-600 font-medium leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make va type specimen book. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
            <br />
            <br /> Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <div className="flex items-center gap-4 mt-5">
            <QtyBox />
            <Button className="btn-o px-4! h-10! gap-3">
              <FiShoppingCart size={20} /> Add to cart
            </Button>
            <Tooltip title="Add to Wishlist" placement="top">
              <Button className="w-11! min-w-11! h-11! rounded-full! border! border-[rgba(0,0,0,0.2)]! text-gray-700! hover:bg-gray-200!">
                <IoIosHeartEmpty size={25} />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 mt-8 mb-5">
        <span
          className={`text-[18px] font-medium cursor-pointer flex pb-1 ${
            isActiveTab === 0
              ? "border-primary text-primary border-b-2"
              : "text-gray-800"
          }`}
          onClick={() => setIsActiveTab(0)}
        >
          Description
        </span>

        <span
          className={`text-[18px] font-medium cursor-pointer flex pb-1 ${
            isActiveTab === 1
              ? "border-primary text-primary border-b-2"
              : "text-gray-800"
          }`}
          onClick={() => setIsActiveTab(1)}
        >
          Reviews (0)
        </span>
      </div>
      {isActiveTab === 0 && (
        <p className="text-[15px] text-gray-600 font-medium leading-7 w-[70%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make va type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
          <br />
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      )}
      {isActiveTab === 1 && (
        <div className="reviewsSection w-[70%]">
          <h2 className="text-[18px] font-semibold text-gray-700 mb-8">
            Customer questions & answers
          </h2>
          <div className="scroll max-h-75 overflow-y-scroll flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="imgWrapper">
                <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={"/shahab.jpeg"}
                    alt="review-image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="Info flex flex-col gap-1 w-[70%]">
                <h3 className="text-[15px] text-gray-700 font-medium">
                  Shahab Gull
                </h3>
                <span className="text-[14px] text-gray-500">2 hours ago</span>
                <p className="text-[15px] text-gray-600 font-medium leading-7 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  voluptate, ipsum numquam deleniti corporis cumque voluptate,
                  ipsum numquam deleniti corporis cumque voluptate, ipsum
                  numquam deleniti corporis cumque voluptate, ipsum numquam
                  deleniti corporis cumque voluptate.
                </p>
              </div>

              <div className="w-[30%] flex justify-end">
                <Rating name="read-only" value={4} readOnly size="small" />
              </div>
            </div>
          </div>
          <div className="reviewsForm w-[70%] mt-8">
            <h2 className="text-[18px] font-semibold text-gray-700 mb-3">
              Add a review
            </h2>
            <form className="flex flex-col gap-5">
              <TextField
                id="reviewInput"
                label="Write your review here..."
                variant="outlined"
                multiline
                rows={5}
                className="w-full"
              />
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <div className="btnWrapper">
                <Button className="btn-o px-4! h-10! gap-3">Submit Review</Button>
              </div>
            </form>
          </div>
        </div>
      )}      
    </>
  );
};

export default ProductDetailsComponent;
