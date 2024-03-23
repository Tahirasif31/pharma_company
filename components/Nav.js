"use client";
import { Button } from "./ui/moving-borders";
import React, { useState } from "react";
function Nav() {
  const [showNav, setShowNav] = useState();
  return (
    <nav className="flex justify-between md:mt-4 py-2 z-50 align-middle items-center 2xl:mx-28 xl:mx-20 md:mx-8 border border-[#FFFFFF]/[0.16] px-4 rounded-lg bg-[#00000052]">
      <span className="md:ml-3 ml-1">Medoget Pharma</span>
      <div
        className={`md:static absolute bg-[#0000004f] md:bg-transparent min-h-[16vh] left-0 ${
          showNav ? "top-[5.9%]" : "top-[-100%]"
        } py-4 md:min-h-fit w-full md:w-auto flex items-center md:px-5 z-50`}
      >
        <ul className="flex md:flex-row flex-col md:gap-[4vw] px-4 gap-8 md:items-center">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Products</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#solutions">Top Solutions</a>
          </li>
        </ul>
      </div>

      {/* <Button
          borderRadius="1.75rem"
          height={8}
          className="dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 md:px-1 md:py-3 py-[5px] "
        >
          Login
        </Button> */}
      <button
        type="button"
        onClick={() => setShowNav(!showNav)}
        className="md:hidden cursor-pointer"
      >
        <div
          className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${
            showNav ? "rotate-45 mb-0  translate-y-[1px]" : "rotate-0 mb-1"
          } `}
        ></div>
        <div
          className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
            showNav ? "hidden mb-0" : "mb-1"
          } `}
        ></div>
        <div
          className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${
            showNav ? "-rotate-45 mb-0" : "rotate-0"
          }`}
        ></div>
      </button>
    </nav>
  );
}

export default Nav;
