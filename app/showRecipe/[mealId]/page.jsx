"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleMeal,
  fetchMealsByCategory,
} from "../../redux/reducers/mealSlice";
import styles from "./showRecipe.module.css";
import Flag from "react-world-flags";
import { GiTimeBomb, GiPowerLightning } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import Card from "../../components/RatingCard/Card";
import { MEALS } from "@/app/data/meals";
const ShowRecipe = ({ params }) => {
  const dispatch = useDispatch();
  // const meal = useSelector((state) => state.meals.meal);
  const similarMeals = useSelector((state) => state.meals.mealsByCatData);
  const similalFiveMeals = similarMeals.slice(0, 5);

  const meal = MEALS.find((item) => item.id === params.mealId);
  useEffect(() => {
    // dispatch(fetchSingleMeal(params.mealId));
  }, [params.mealId]);
  if (meal.length < 1 || !meal) {
    return;
  } else {
    // dispatch(fetchMealsByCategory(meal.categoryIds[0]));
  }
  return (
    <div className="flex  items-center justify-center flex-col my-6 w-full">
      <div className="mb-6">
        <h3 className="mt-4 text-primary hover:text-accent hover:underline font-bold">
          {meal.title}
        </h3>
      </div>
      <div className="w-1/2 h-1/2 flex justify-center items-center">
        <img
          className="hover:opacity-80 w-[90%] h-[90%] p-1 rounded-md border border-double border-accent border-b-4"
          src={meal.imageUrl}
          alt={meal.title}
        />
      </div>
      <div className="flex  my-4 p-2 justify-center items-center">
        <Flag code={meal.flag} height="16" fallback={<span>Unknown</span>} />

        <div className="flex hover:underline justify-between items-center">
          <h6 className={`${styles.durationItem} px-5`}>
            {"السعرات الحرارية : "}
            {meal.calories}
          </h6>
          <GiPowerLightning style={{ color: "#ed6109" }} />
        </div>
        <div className="flex hover:underline justify-between items-center">
          <h6 className={`${styles.durationItem} px-5`}>
            {"الافراد : "}
            {meal.servings}
          </h6>
          <IoIosPeople style={{ color: "#ed6109" }} />
        </div>
        <div className="flex hover:underline justify-between items-center">
          <h6 className={`${styles.durationItem} px-5`}>
            {" وقت الطهي : "}
            {meal.duration}
          </h6>
          <GiTimeBomb style={{ color: "#ed6109" }} />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex w-[20%] ml-4">
          <Card head={"وجباب مماثلة"} meals={MEALS} />
        </div>
        <div className="flex flex-col  mr-9">
          <h3 className="flex justify-end my-6">المقادير</h3>
          {meal.ingredients &&
            meal.ingredients.map((item, index) => {
              return (
                <ul className="list-none mb-10">
                  <li className="flex flex-row-reverse">
                    <h4 className="flex min-w-[30px] justify-end ml-2">
                      {" "}
                      - {index + 1}
                    </h4>
                    <h4 className={styles.ingItem}>{item}</h4>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col self-end mr-9">
        <h3 className="flex justify-end my-6">الطريقة</h3>
        {meal.steps &&
          meal.steps.map((item, index) => {
            return (
              <ul className="list-none mb-10">
                <li className="flex flex-row-reverse">
                  <h4 className="flex min-w-[30px] justify-end ml-2">
                    {" "}
                    - {index + 1}
                  </h4>
                  <h4 className={styles.ingItem}>{item}</h4>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default ShowRecipe;
