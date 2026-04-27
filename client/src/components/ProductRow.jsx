import React from "react";
import Link from "next/link";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { ProductSlider } from "./ProductSlider";

const ProductsRow = ({title}) => {
  return (
    <>
      <section className="bg-white py-3">
        <div className="container">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[20px] text-gray-800 font-semibold">
              {" "}
              {title}
            </h2>
            <Link
              href="/"
              className="flex items-center gap-1 text-[15px] text-gray-700 font-semibold hover:text-primary"
            >
              View all <RiArrowRightCircleLine size={25} />
            </Link>
          </div>
          <ProductSlider/>
        </div>
      </section>
    </>
  );
};
export default ProductsRow;
