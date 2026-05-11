"use client";
import CartItems from "@/components/CartItems";
import { Button } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container">
        <div className="flex w-full m-auto gap-10">
          <div className="col1 bg-white p-5 rounded-md shadow-md w-[70%]">
            <div className="p-5 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[20px] text-gray-700 font-medium">
                Your Cart
              </h2>
              <p className="text-[15px] text-gray-700 font-normal">
                There are <span className="text-primary font-bold">7</span>{" "}
                products in your cart
              </p>
            </div>
            <CartItems />
            <CartItems />
            <CartItems />
          </div>
          <div className="col2 w-[30%]">
            <div className="bg-white rounded-md shadow-md w-full">
              <div className="p-5 border-b border-[rgba(0,0,0,0.1)]">
                <h2 className="text-[20px] text-gray-700 font-medium">
                  Cart Totals
                </h2>
              </div>
              <div className="info p-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-[15px] font-medium text-gray-600">
                    Subtotal
                  </span>

                  <span className="text-[17px] font-semibold text-[#C80000]">
                    $179.93
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-[15px] font-medium text-gray-600">
                    Shipping
                  </span>

                  <span className="text-[15px] font-medium text-green-600">
                    Free
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-[15px] font-medium text-gray-600">
                    Estimated For
                  </span>

                  <span className="text-[15px] font-medium text-gray-800">
                    Pakistan
                  </span>
                </div>

                <div className="flex items-center justify-between py-4">
                  <span className="text-[18px] font-semibold text-gray-800">
                    Total
                  </span>

                  <span className="text-[20px] font-bold text-[#C80000]">
                    $179.93
                  </span>
                </div>
              </div>
              <div className="px-5 flex w-full pb-5 ">
                <Button className="btn-o w-full">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
