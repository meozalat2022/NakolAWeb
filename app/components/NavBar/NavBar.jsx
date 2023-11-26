"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { menueItems } from "../meueItems";
import MenueItems from "../MenueItems/MenueItems";
import styles from "./NavBar.module.css";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import SocialMediaIcons from "../SocialMediaIcons/page";

const NavBar = () => {
  // const categories = useSelector((state) => state.category.data);
  // console.log(categories);
  // if (!categories) {
  //   return;
  // }

  const [open, setOpen] = useState(false);
  return (
    <nav className="xl:bg-primary  xl:h-16  xl:flex xl:items-center xl:justify-center">
      <div className="flex  xl:items-center lg:items-center xl:justify-center font-medium justify-around">
        <div className="z-50  p-5 xl:w-auto w-full xl:hidden flex justify-between">
          <img
            src="/logo_.png"
            alt="logo"
            className="xl:cursor-pointer h-16 pr-40"
          />
          <div
            className="text-3xl  xl:hidden flex justify-center items-center"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineCloseCircle style={{ color: "#3f37c9" }} />
            ) : (
              <AiOutlineMenu style={{ color: "#3f37c9" }} />
            )}
          </div>
        </div>
        <ul className="xl:flex hidden items-center gap-8 xl:w-auto lg:w-auto">
          <div className="xl:flex hidden mr-20">
            <SocialMediaIcons />
          </div>
          <MenueItems />
          <li className="list-none border xl:border-solid border-l-accent border-y-0 border-r-0 px-4">
            <Link
              style={{ textDecoration: "none", color: "#4cc9f0" }}
              href="/"
              className="py-6 px-4 inline-block"
            >
              الرئيسية
            </Link>
          </li>
        </ul>
        {/* mobile nav */}
        <ul
          className={`
        xl:hidden bg-white items-center flex justify-center m-auto fixed w-full h-screen top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          {/* <li className="list-none flex justify-center items-center">
            <Link href="/" className="py-7 inline-block text-center px-20">
              الرئيسية
            </Link>
          </li> */}
          <div className="flex justify-center items-center">
            <MenueItems />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
