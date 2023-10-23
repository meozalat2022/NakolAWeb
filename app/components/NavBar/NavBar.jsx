"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { menueItems } from "../meueItems";
import MenueItems from "../MenueItems/MenueItems";
import styles from "./NavBar.module.css";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FACEBOOK, YOUTUBE, INSTAGRAM, TIKTOK } from "../socialMedia";

const NavBar = () => {
  // const categories = useSelector((state) => state.category.data);
  // console.log(categories);
  // if (!categories) {
  //   return;
  // }
  const [faceColor, setFaceColor] = useState("#4cc9f0");
  const [instaColor, setInstaColor] = useState("#4cc9f0");
  const [tikColor, setTikColor] = useState("#4cc9f0");
  const [youtColor, setYoutColor] = useState("#4cc9f0");
  const OnFaceMouseEnter = () => {
    setFaceColor("#5850e6");
  };
  const OnFaceMouseLeave = () => {
    setFaceColor("#4cc9f0");
  };

  const OnInstaMouseEnter = () => {
    setInstaColor("#5850e6");
  };
  const OnInstaMouseLeave = () => {
    setInstaColor("#4cc9f0");
  };

  const OnTikMouseEnter = () => {
    setTikColor("#5850e6");
  };
  const OnTikMouseLeave = () => {
    setTikColor("#4cc9f0");
  };
  const OnYoutMouseEnter = () => {
    setYoutColor("#5850e6");
  };
  const OnYoutMouseLeave = () => {
    setYoutColor("#4cc9f0");
  };

  const [open, setOpen] = useState(false);
  return (
    //css navbar
    // <div className={styles.header}>
    //   <ul>
    //     <div className={styles.socialIcons}>
    //       <h3
    //         onMouseEnter={OnFaceMouseEnter}
    //         onMouseLeave={OnFaceMouseLeave}
    //         className={styles.icon}
    //       >
    //         <Link target="_blank" href={FACEBOOK}>
    //           <BsFacebook style={{ color: faceColor }} />
    //         </Link>
    //       </h3>
    //       <h3
    //         onMouseEnter={OnInstaMouseEnter}
    //         onMouseLeave={OnInstaMouseLeave}
    //         className={styles.icon}
    //       >
    //         <Link target="_blank" href={INSTAGRAM}>
    //           <AiFillInstagram style={{ color: instaColor }} />
    //         </Link>
    //       </h3>
    //       <h3
    //         onMouseEnter={OnTikMouseEnter}
    //         onMouseLeave={OnTikMouseLeave}
    //         className={styles.icon}
    //       >
    //         <Link target="_blank" href={TIKTOK}>
    //           <FaTiktok style={{ color: tikColor }} />
    //         </Link>
    //       </h3>
    //       <h3
    //         onMouseEnter={OnYoutMouseEnter}
    //         onMouseLeave={OnYoutMouseLeave}
    //         className={styles.icon}
    //       >
    //         <Link target="_blank" href={YOUTUBE}>
    //           <FaYoutube style={{ color: youtColor }} />
    //         </Link>
    //       </h3>
    //     </div>
    //     {menueItems.map((item, index) => {
    //       return <MenueItems item={item} key={index} />;
    //     })}
    //     <li>
    //       <a href="/">الرئيسية</a>
    //     </li>
    //   </ul>
    // </div>

    <nav className="xl:bg-primary xl:h-16  xl:flex xl:items-center xl:justify-center">
      <div className="flex xl:items-center lg:items-center xl:justify-center font-medium justify-around">
        <div className="z-50 p-5 xl:w-auto w-full xl:hidden flex justify-between">
          <img
            src="/logo_.png"
            alt="logo"
            className="xl:cursor-pointer h-16 pr-40"
          />
          <div
            className="text-3xl xl:hidden flex justify-center items-center"
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
            <h3
              onMouseEnter={OnTikMouseEnter}
              onMouseLeave={OnTikMouseLeave}
              className="px-4 mr-2 rounded-lg flex justify-center items-center w-0 h-5"
            >
              <Link target="_blank" href={TIKTOK}>
                <FaTiktok size={25} style={{ color: tikColor }} />
              </Link>
            </h3>
            <h3
              onMouseEnter={OnYoutMouseEnter}
              onMouseLeave={OnYoutMouseLeave}
              className="px-4 mr-2 rounded-lg flex justify-center items-center w-0 h-5"
            >
              <Link target="_blank" href={YOUTUBE}>
                <FaYoutube size={25} style={{ color: youtColor }} />
              </Link>
            </h3>

            <h3
              onMouseEnter={OnInstaMouseEnter}
              onMouseLeave={OnInstaMouseLeave}
              className="px-4 mr-2 rounded-lg flex justify-center items-center w-0 h-5"
            >
              <Link target="_blank" href={INSTAGRAM}>
                <AiFillInstagram size={25} style={{ color: instaColor }} />
              </Link>
            </h3>
            <h3
              onMouseEnter={OnFaceMouseEnter}
              onMouseLeave={OnFaceMouseLeave}
              className="px-4 mr-2 rounded-lg flex justify-center items-center w-0 h-5"
            >
              <Link target="_blank" href={FACEBOOK}>
                <BsFacebook size={25} style={{ color: faceColor }} />
              </Link>
            </h3>
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
        xl:hidden bg-white  fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
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
