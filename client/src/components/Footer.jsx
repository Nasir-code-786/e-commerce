import React from "react";
import {
  FaShippingFast,
  FaUndoAlt,
  FaLock,
  FaGift,
  FaHeadset,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-8">
      <div className="container">
        <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 lg:pb-8 px-0 lg:px-5">
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaShippingFast className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Free Shipping</h3>
            <p className="text-[13px] font-medium text-gray-700">For all Orders Over $100</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaUndoAlt className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">30 Days Return</h3>
            <p className="text-[13px] font-medium text-gray-700">For an Exchange Product</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaLock className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Secured Payment</h3>
            <p className="text-[13px] font-medium text-gray-700">Payment Cards Accepted</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaGift className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Special Gifts</h3>
            <p className="text-[13px] font-medium text-gray-700">Our First Product Order</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaHeadset className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Support 24/7</h3>
            <p className="text-[13px] font-medium text-gray-700">Contact Us Anytime</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaMoneyBillWave className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Money Guarantee</h3>
            <p className="text-[13px] font-medium text-gray-700">30 Days Money Back</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaCheckCircle className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">
              Quality Assurance
            </h3>
            <p className="text-[13px] font-medium text-gray-700">100% Original Products</p>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="flex justify-between py-4">
          <div className="col1">
            <h3 className="text-[20px] font-semibold">
              Contact Us
            </h3>
            <p className="text-[14px] font-normal pb-4 text-gray-600">
              Cartivo - Mega Super Store
              <br />
              507 Union Trade Center France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
