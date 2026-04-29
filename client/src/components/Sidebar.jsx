"use client";
import React, { useState } from "react";
import { Button, Collapse } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { FaStar } from "react-icons/fa";

const Sidebar = () => {
  const [isOpenCatFilter, setIsOpenCatFilter] = useState(true);
  const [isOpenRatingFilter, setIsOpenRatingFilter] = useState(true);
  const [price, setPrice] = useState([0, 30000]);

  return (
    <aside className="sticky top-37.5 flex flex-col gap-5">
      <div className="box">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[16px] font-semibold text-gray-700">
            Shop by Category
          </h3>
          <Button
            className="min-w-7.5! w-7.5! h-7.5! rounded-full! hover:bg-[#f07312]!"
            onClick={() => setIsOpenCatFilter(!isOpenCatFilter)}
          >
            {isOpenCatFilter === true ? (
              <FaAngleDown
                size={20}
                className="text-gray-800 hover:text-white!"
              />
            ) : (
              <FaAngleUp
                size={20}
                className="text-gray-800 hover:text-white!"
              />
            )}
          </Button>
        </div>
        <Collapse in={isOpenCatFilter}>
          <div className="scroll overflow-scroll  max-h-62.5">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Fruits & Vegetables"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Meats & Seafood"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Breaksfast & Dairy"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Breads & Bakery"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Beverages "
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Frozen Foods"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Biscuits & Snacks"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Biscuits & Snacks"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Biscuits & Snacks"
              />
            </FormGroup>
          </div>
        </Collapse>
      </div>
      <div className="box">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] font-semibold text-gray-700">
            Filter by Price
          </h3>
        </div>
        <RangeSlider
          value={price}
          onInput={setPrice}
          min={100}
          max={60000}
          step={5}
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-700 text-[14px]">${price[0]}</span>
          <span className="text-gray-700 text-[14px]">${price[1]}</span>
        </div>
      </div>
      <div className="box">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[16px] font-semibold text-gray-700">
            Filter by Rating
          </h3>
          <Button
            className="min-w-7.5! w-7.5! h-7.5! rounded-full! hover:bg-[#f07312]!"
            onClick={() => setIsOpenRatingFilter(!isOpenRatingFilter)}
          >
            {isOpenRatingFilter === true ? (
              <FaAngleDown
                size={20}
                className="text-gray-800 hover:text-white!"
              />
            ) : (
              <FaAngleUp
                size={20}
                className="text-gray-800 hover:text-white!"
              />
            )}
          </Button>
        </div>
        <Collapse in={isOpenRatingFilter}>
          <div className="scroll overflow-scroll  max-h-62.5">
            <FormGroup>
              {[5, 4, 3, 2, 1].map((rating) => (
                <FormControlLabel
                  key={rating}
                  control={<Checkbox />}
                  label={
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: rating }).map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" size={18}/>
                        ))}
                        {Array.from({ length: 5 - rating }).map((_, i) => (
                          <FaStar key={i + rating} className="text-gray-300" size={18}/>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600"></span>
                    </div>
                  }
                />
              ))}
            </FormGroup>
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
