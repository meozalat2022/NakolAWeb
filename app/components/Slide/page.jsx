import Image from "next/image";
import React from "react";
import Flag from "react-world-flags";
import { GiTimeBomb, GiPowerLightning, GiChefToque } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import styles from "../UI/Card/Card.module.css";
import Link from "next/link";

const Slide = ({
  image,
  title,
  flag,
  calories,
  servings,
  duration,
  ingredients,
  id,
  mealRating,
}) => {
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="#D3D3D3" />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
          </div>
        );
    }
  };
  return (
    <div className=" bg-gray-100 rounded-lg">
      <div className="flex p-4">
        <div className="slider_image bg-white">
          <Image
            className="p-2 "
            src={image}
            alt={title}
            width={500}
            height={400}
          ></Image>
        </div>
        <div className="flex-1 flx justify-center ">
          <h3 className="text-primary mt-5 font-bold text-base text-center">
            {title}
          </h3>
          <div className="bg-white mt-6 rounded-md mx-2 flex justify-between px-2 items-center">
            <Flag code={flag} height="16" fallback={<span>Unknown</span>} />

            <div className="flex hover:underline justify-between items-center">
              <h6 className="mr-1">
                {"السعرات الحرارية : "}
                {calories}
              </h6>
              <GiPowerLightning style={{ color: "#ed6109" }} />
            </div>
            <div className="flex hover:underline justify-between items-center">
              <h6 className="mr-1">
                {"الافراد : "}
                {servings}
              </h6>
              <IoIosPeople style={{ color: "#ed6109" }} />
            </div>
            <div className="flex hover:underline justify-between items-center">
              <h6 className="mr-1">
                {" وقت الطهي : "}
                {duration}
              </h6>
              <GiTimeBomb style={{ color: "#ed6109" }} />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <span className="flex justify-between">
              {!mealRating ? generateRating(4) : generateRating(mealRating)}
            </span>
          </div>
          <div className="p-6 mt-10 rounded-lg mx-2 flex justify-center items-center">
            <h4 className={`${styles.ingredients} text-center`}>
              {ingredients}
            </h4>
          </div>
          <div className="flex justify-center ">
            <Link
              className="bg-primary px-6 py-2 rounded-md text-white no-underline hover:bg-accent hover:text-gray-50"
              href={`/showRecipe/${id}`}
            >
              المزيد
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
