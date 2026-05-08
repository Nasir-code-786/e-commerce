"use client";
import React from "react";
import ProductDetailsComponent from "@/components/ProductDetailsComponent";

const ProductDetails = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container pb-5">
        <ProductDetailsComponent />
      </div>
    </section>
  );
};

export default ProductDetails;
