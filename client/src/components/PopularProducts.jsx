"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ProductSlider } from "./ProductSlider";

export const PopularProducts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <div className="col1 w-[30%]">
            <h2 className="text-[20px] text-gray-800 font-semibold">
              {" "}
              Popular Products
            </h2>
            <p className="text-[16px] text-gray-800">
              Do not miss the current offers
            </p>
          </div>
          <div className="col1 w-[70%] flex items-center justify-end">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Breads & Bakery"/>
              <Tab label="Breads & Bakery"/>
              <Tab label="Breaksfast & Dairy"/>
              <Tab label="Meats & Seafood"/>
              <Tab label="Fruits & Vegetables"/>
            </Tabs>
          </div>
        </div>
        <ProductSlider/>
      </div>
    </section>
  );
};
