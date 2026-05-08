"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const QtyBox = () => {
  const [qtyValue, setQtyValue] = useState(0);
  return (
    <div className="qtyBox border border-[rgba(0,0,0,0.2)] rounded-md flex items-center gap-1 w-20 h-10 relative">
      <input
        type="number"
        value={qtyValue}
        onChange={(e) => setQtyValue(Number(e.target.value))}
        className="border-0 outline-none w-full h-full px-2 text-[16px] text-gray-800"
      />
      <div className="flex flex-col absolute top-0 right-0 h-full">
        <Button
          className="w-7.5! min-w-7.5! h-5! text-gray-700!"
          onClick={() => setQtyValue(qtyValue + 1)}
        >
          <FaAngleUp size={18} />
        </Button>
        <Button
          className="w-7.5! min-w-7.5! h-5! text-gray-700!"
          onClick={() => setQtyValue(Math.max(0, qtyValue - 1))}
        >
          <FaAngleDown size={18} />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
