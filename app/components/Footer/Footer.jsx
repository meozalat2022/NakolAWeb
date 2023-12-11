"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FACEBOOK, TIKTOK, INSTAGRAM, YOUTUBE } from "../socialMedia";
import Link from "next/link";
import SocialMediaIcons from "../SocialMediaIcons/page";
const Footer = () => {
  return (
    //container
    <>
      <div className="h-80">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3f37c9"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="w-full hidden pb-4 xl:flex bg-primary h-44">
        {/* copright */}
        <div className="flex flex-row m-auto items-center justify-between w-full h-full">
          <div className="  text-white text-base p-2">
            <h2>All Rights Reserved: &copy; 2023</h2>
            <h4>Website designed by Mohammed Refat</h4>
            <h4>
              Mail:{" "}
              <a
                className="text-gray-100"
                href="mailto:meozalat2002@hotmail.com"
              >
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
          <div className="flex justify-center mr-4 items-center ">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
