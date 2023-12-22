import styles from "./Card.module.css";
import Link from "next/link";
import { GiChefToque } from "react-icons/gi";

const HealthyCard = ({ meals, mealRating }) => {
  const ingArr = meals.ingredients.slice(0, 3);
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
    <>
      <Link
        href={`/showRecipe/${meals.id}`}
        className="group cursor-pointer no-underline text-sm text-black hidden hover:scale-105 border-double border-b-4 border-accent lg:flex border  mx-1 shadow-lg rounded-lg"
      >
        <div className="flex">
          <div className="w-[30%] h-full">
            <img
              className="rounded-l-md w-full h-full flex group-hover:opacity-80 transition-opacity duration-200"
              src={meals.imageUrl}
              alt={meals.title}
            />
          </div>
          <div className="w-[70%] h-full justify-center items-center">
            <div className="text-primary hover:underline flex justify-center items-center">
              <h4>{meals.title}</h4>
            </div>
            <div
              className={`${styles.ingredients} flex justify-center items-center text-center px-2 h-28`}
            >
              <h4>{ingArr}</h4>
            </div>
            <span className=" flex justify-center">
              {!mealRating ? generateRating(4) : generateRating(mealRating)}
            </span>
          </div>
        </div>
      </Link>

      {/* Mobile Card */}

      <Link
        href={`/showRecipe/${meals.id}`}
        className="flex lg:hidden  m-3 w-full h-full justify-center items-end"
      >
        <div className="flex w-full h-full p-2 flex-col justify-center items-center ">
          <div className=" flex w-full">
            <img
              className=" w-full h-full flex"
              src={meals.imageUrl}
              alt={meals.title}
            />
          </div>
          <div className="flex justify-center items-center">
            <span className="text-center text-sm">{meals.title}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HealthyCard;
