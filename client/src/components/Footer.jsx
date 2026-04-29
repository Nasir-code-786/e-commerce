"use client";
import { Button } from "@mui/material";
import Link from "next/link";
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
import { MdEmail, MdPhone } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-8 pb-0">
      <div className="container">
        <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 lg:pb-8 px-0 lg:px-5">
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaShippingFast className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Free Shipping</h3>
            <p className="text-[13px] font-medium text-gray-700">
              For all Orders Over $100
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaUndoAlt className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">30 Days Return</h3>
            <p className="text-[13px] font-medium text-gray-700">
              For an Exchange Product
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaLock className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Secured Payment</h3>
            <p className="text-[13px] font-medium text-gray-700">
              Payment Cards Accepted
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaGift className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Special Gifts</h3>
            <p className="text-[13px] font-medium text-gray-700">
              Our First Product Order
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaHeadset className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Support 24/7</h3>
            <p className="text-[13px] font-medium text-gray-700">
              Contact Us Anytime
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaMoneyBillWave className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">Money Guarantee</h3>
            <p className="text-[13px] font-medium text-gray-700">
              30 Days Money Back
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <FaCheckCircle className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:transition-y-1" />
            <h3 className="text-[16px] font-semibold mt-3">
              Quality Assurance
            </h3>
            <p className="text-[13px] font-medium text-gray-700">
              100% Original Products
            </p>
          </div>
        </div>
        <hr className="hr"></hr>

        <div className="flex flex-col lg:flex-row justify-between py-8 gap-8">
          {/* Column 1 */}
          <div className="col1 w-full lg:w-[25%] flex flex-col gap-5">
            <div className="box">
              <h3 className="text-[20px] font-semibold">Contact Us</h3>

              <ul className="mt-5 flex flex-col gap-3">
                {/* Email */}
                <li className="flex items-center gap-3">
                  <MdEmail className="text-[20px] text-gray-500" />
                  <Link
                    href={"mailto:nasir.mehsud.work@gmail.com"}
                    className="text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    nasir.mehsud.work@gmail.com
                  </Link>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-3">
                  <MdPhone className="text-[20px] text-gray-500" />
                  <span className="text-[15px] font-semibold text-gray-600 hover:text-primary">
                    (+92) 3175026940
                  </span>
                </li>
              </ul>

              {/* Chat */}
              <div className="flex items-center gap-3 mt-4">
                <IoMdChatboxes className="text-[20px] text-gray-500" />
                <span className="text-[15px] font-semibold text-gray-600 hover:text-primary">
                  Online chat get experts help
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col2 w-full lg:w-[35%] flex justify-between gap-5">
            <div className="box">
              <h3 className="text-[20px] font-semibold">Products</h3>
              <ul className="list mt-5">
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Prices drop
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    New products
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Best sales
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Sitemap
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Stores
                  </Link>
                </li>
              </ul>
            </div>

            <div className="box">
              <h3 className="text-[20px] font-semibold">Our Company</h3>
              <ul className="list mt-5">
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Delivery
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Legal Notice
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Terms and conditions of use
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    About us
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Secure payment
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href={"/"}
                    className="link text-[15px] font-semibold text-gray-600 hover:text-primary"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}

          <div className="col3 w-full lg:w-[40%] pl-0 lg:pl-10">
            <h3 className="text-[20px] font-semibold">
              Subscribe to newsletter
            </h3>

            <p className="text-[15px] font-semibold text-gray-600 hover:text-primary mt-5">
              Subscribe to our latest newsletter to get news about Special
              discounts.
            </p>

            <form className="flex flex-col gap-5 w-full mt-5">
              <div className="relative group w-full">
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg transition-colors duration-200 group-hover:text-primary" />

                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-11 bg-white border border-gray-300 rounded-md pl-10 pr-4 text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400 shadow-sm"
                />
              </div>

              <div>
                <Button className="btn-border-o">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3">
        <div className="container flex items-center justify-between">
          <div className="socials flex items-center gap-2">
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-9 h-9 hover:bg-primary hover:text-white group transition"
            >
              <FaFacebookF
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-9 h-9 hover:bg-primary hover:text-white group transition"
            >
              <FaInstagram
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-9 h-9 hover:bg-primary hover:text-white group transition"
            >
              <FaLinkedinIn
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-9 h-9 hover:bg-primary hover:text-white group transition"
            >
              <FaYoutube
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-9 h-9 hover:bg-primary hover:text-white group transition"
            >
              <RiVisaLine
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-9 h-9 hover:bg-primary hover:text-white group transition"
            >
              <BsPaypal
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
