import Link from "next/link";
import styles from "./MealsListCard.module.css";
import Flag from "react-world-flags";
import { GiTimeBomb, GiPowerLightning } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
const MealsListCard = ({ mealsList }) => {
  return (
    <div className="hidden gap-1 lg:flex w-[50%] my-4">
      <div className="w-full flex m-1 mx-2 shadow-lg rounded-lg ">
        <div className="flex w-[30%] ">
          <img
            className="flex w-full  rounded-l-md"
            src={mealsList.imageUrl}
            alt={mealsList.title}
          />
        </div>
        <div className="flex w-[70%] flex-col justify-between items-center">
          <div>
            <h1>{mealsList.title}</h1>
          </div>
          <div>
            <p>{mealsList.ingredients}</p>
          </div>
          <div className="flex w-full items-center justify-center pb-2">
            <div className="flex  w-full justify-center">
              <Flag
                code={mealsList.flag}
                height="16"
                fallback={<span>Unknown</span>}
              />
            </div>
            <div className="flex justify-center  w-full">
              <span className="pr-2">{mealsList.calories}</span>
              <GiPowerLightning />
            </div>
            <div className="flex justify-center  w-full">
              <span className="pr-2">{mealsList.servings}</span>
              <IoIosPeople />
            </div>
            <div className="flex justify-center w-full">
              <span className="pr-2">{mealsList.duration}</span>
              <GiTimeBomb />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsListCard;
