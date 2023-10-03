import React, { useState } from "react";

//imoprting the new menus for the sick conditional/tertiary
import CoffeeMenu from "./coffeeMenu";
import DessertMenu from "./dessertMenu";
import SandwichMenu from "./sandwhichMenu";

const Menu = () => {
  const [showCoffeeMenu, setShowCoffeeMenu] = useState(false);
  const [showDessertMenu, setShowDessertMenu] = useState(false);
  const [showSandwichMenu, setShowSandwichMenu] = useState(true);

  const showSandwichMenuHandler = () => {
    setShowCoffeeMenu(false);
    setShowDessertMenu(false);
    setShowSandwichMenu(true);
  };

  const showDessertMenuHandler = () => {
    setShowCoffeeMenu(false);
    setShowDessertMenu(true);
    setShowSandwichMenu(false);
  };

  const showCoffeeMenuHandler = () => {
    setShowCoffeeMenu(true);
    setShowDessertMenu(false);
    setShowSandwichMenu(false);
  };

  return (
    <div
      name="menu"
      className="bg-white rounded-xl items-center min-h-screen max-h-3/4 relative mb-4 p-4 mt-[13rem] px-4 max-w-[1500px] mx-auto text-amber-950"
    >
      {/* Add a small top border */}
      <div className="w-full md:w-px bg-gray-300 h-1 mt-4"></div>
      <div className="text-3xl md:text-5xl lg:text-6xl text-center mb-6 relative">
        <span className="border-b-4 border-sgreen w-1/3 inline-block"></span>
        <span className="border-b-4 border-white w-1/3 inline-block"></span>
        <span className="border-b-4 border-sred w-1/3 inline-block"></span>
        <span className="relative z-1 px-2 md:px-4">Our Menu</span>
        <br />
        <span className="text-[30px] text-amber-800 opacity-50">
          <span
            className={`border-b-4 cursor-pointer ${showSandwichMenu ? "border-sgreen" : ""}`}
            onClick={showSandwichMenuHandler}
          >
            Sandwiches
          </span>
          /
          <span
            className={`border-b-4 cursor-pointer ${showDessertMenu ? "border-white" : ""}`}
            onClick={showDessertMenuHandler}
          >
            Desserts
          </span>
          /
          <span
            className={`border-b-4 cursor-pointer ${showCoffeeMenu ? "border-sred" : ""}`}
            onClick={showCoffeeMenuHandler}
          >
            Coffees
          </span>
        </span>{" "}
        {/* Smaller and light grey */}
      </div>
      {showSandwichMenu && (
  <SandwichMenu/>
)}
{showDessertMenu && (
  <DessertMenu/>
)}
{showCoffeeMenu && (
  <CoffeeMenu/>
)}

      <div className="w-full md:w-px bg-gray-300 h-1"></div>
    </div>
  );
};

export default Menu;
