import React from "react";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { FACEBOOK, YOUTUBE, INSTAGRAM, TIKTOK } from "../socialMedia";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <>
      <div className="social_media_icon_wrapper">
        <Link target="_blank" href={TIKTOK}>
          <BsTiktok />
        </Link>
      </div>
      <div className="social_media_icon_wrapper">
        <Link target="_blank" href={YOUTUBE}>
          <BsYoutube />
        </Link>
      </div>

      <div className="social_media_icon_wrapper">
        <Link target="_blank" href={INSTAGRAM}>
          <BsInstagram />
        </Link>
      </div>
      <div className="social_media_icon_wrapper">
        <Link target="_blank" href={FACEBOOK}>
          <BsFacebook />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaIcons;
