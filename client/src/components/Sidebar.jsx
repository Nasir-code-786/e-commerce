"use client";
import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Sidebar = () => {
  return (
    <aside className="sticky top-37.5">
      <div className="box">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-semibold text-gray-700">
            Shop by Category
          </h3>
          <Button className="min-w-7.5! w-7.5! h-7.5! rounded-full! hover:bg-[#f07312]!">
            <FaAngleDown
              size={20}
              className="text-gray-800 hover:text-white!"
            />
          </Button>
        </div>
        <div className="scroll overflow-scroll max-h-75">
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
      </div>
    </aside>
  );
};

export default Sidebar;
