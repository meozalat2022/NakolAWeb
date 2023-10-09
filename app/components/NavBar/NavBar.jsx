"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { menueItems } from "../meueItems";
import MenueItems from "../MenueItems/MenueItems";
import styles from "./NavBar.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
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
  return (
    <div className={styles.header}>
      <ul className="navbar  navbar-expand-lg">
        <div className={styles.socialIcons}>
          <h3
            onMouseEnter={OnFaceMouseEnter}
            onMouseLeave={OnFaceMouseLeave}
            className={styles.icon}
          >
            <Link target="_blank" href={FACEBOOK}>
              <BsFacebook style={{ color: faceColor }} />
            </Link>
          </h3>
          <h3
            onMouseEnter={OnInstaMouseEnter}
            onMouseLeave={OnInstaMouseLeave}
            className={styles.icon}
          >
            <Link target="_blank" href={INSTAGRAM}>
              <AiFillInstagram style={{ color: instaColor }} />
            </Link>
          </h3>
          <h3
            onMouseEnter={OnTikMouseEnter}
            onMouseLeave={OnTikMouseLeave}
            className={styles.icon}
          >
            <Link target="_blank" href={TIKTOK}>
              <FaTiktok style={{ color: tikColor }} />
            </Link>
          </h3>
          <h3
            onMouseEnter={OnYoutMouseEnter}
            onMouseLeave={OnYoutMouseLeave}
            className={styles.icon}
          >
            <Link target="_blank" href={YOUTUBE}>
              <FaYoutube style={{ color: youtColor }} />
            </Link>
          </h3>
        </div>
        {menueItems.map((item, index) => {
          return <MenueItems item={item} key={index} />;
        })}
        <li>
          <a href="/">الرئيسية</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
