import React from "react";
import { Gilda_Display } from "@next/font/google";

const gildaDisplay = Gilda_Display({ weight: "400" });

const MainName = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-offsetTitle">
      <h1
        className={`text-theme-select text-4xl font-light ${gildaDisplay.className}`}
      >
        Christopher Kade
      </h1>
      <h2 className="font-extralight">Front-end Engineer & technical writer</h2>
    </div>
  );
};

export default MainName;
