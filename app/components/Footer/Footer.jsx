"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FACEBOOK, TIKTOK, INSTAGRAM, YOUTUBE } from "../socialMedia";
import Link from "next/link";
const Footer = () => {
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
    //container
    <div className="w-full hidden pb-4 xl:flex bg-primary h-44">
      {/* copright */}
      <div className="flex flex-row m-auto items-center justify-between w-full h-full">
        <div className="  text-white text-base p-2">
          <h2>All Rights Reserved: &copy; 2023</h2>
          <h4>Website designed by Mohammed Refat</h4>
          <h4>
            Mail:{" "}
            <a className="text-gray-100" href="mailto:meozalat2002@hotmail.com">
              meozalat2002@hotmail.com
            </a>
          </h4>
          <h4>Phone: +201149045481</h4>
        </div>
        {/* contact us */}
        <div className="flex flex-col ">
          <h4 style={{ color: "white" }}>حمل التطبيق واستمتع بكل الوصفات</h4>
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.nakola"
          >
            <Image
              className={styles.image}
              width={150}
              height={75}
              src="/playStore.png"
              alt=""
            />
          </Link>
        </div>
        {/* social media */}
        <div className="flex-col justify-center mr-4 items-center ">
          <div className="flex justify-center">
            <h4 className="text-white">تابعونا</h4>
          </div>
          <div className="flex">
            <h3
              onMouseEnter={OnFaceMouseEnter}
              onMouseLeave={OnFaceMouseLeave}
              className="px-4 rounded-lg flex justify-center items-center w-0 h-5"
            >
              <Link target="_blank" href={FACEBOOK}>
                <BsFacebook size={25} style={{ color: faceColor }} />
              </Link>
            </h3>
            <h3
              onMouseEnter={OnInstaMouseEnter}
              onMouseLeave={OnInstaMouseLeave}
              className="px-4 rounded-lg flex justify-center items-center w-0 h-5"
            >
              <Link target="_blank" href={INSTAGRAM}>
                <AiFillInstagram size={25} style={{ color: instaColor }} />
              </Link>
            </h3>
            <h3
              onMouseEnter={OnTikMouseEnter}
              onMouseLeave={OnTikMouseLeave}
              className="px-4 rounded-lg flex justify-center items-center w-0 h-5"
            >
              <Link target="_blank" href={TIKTOK}>
                <FaTiktok size={25} style={{ color: tikColor }} />
              </Link>
            </h3>
            <h3
              onMouseEnter={OnYoutMouseEnter}
              onMouseLeave={OnYoutMouseLeave}
              className="px-4 rounded-lg flex justify-center items-center w-0 h-5"
            >
              <Link target="_blank" href={YOUTUBE}>
                <FaYoutube size={25} style={{ color: youtColor }} />
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
