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
const ShowRecipe = ({ params }) => {
  const dispatch = useDispatch();
  const meal = useSelector((state) => state.meals.meal);
  const similarMeals = useSelector((state) => state.meals.mealsByCatData);
  const similalFiveMeals = similarMeals.slice(0, 5);
  useEffect(() => {
    // dispatch(fetchSingleMeal(params.mealId));
  }, [params.mealId]);
  if (meal.length < 1 || !meal) {
    return;
  } else {
    // dispatch(fetchMealsByCategory(meal.categoryIds[0]));
  }
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{meal.title}</h3>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={meal.imageUrl} alt={meal.title} />
      </div>
      <div className={styles.calFlagDura}>
        <Flag code={meal.flag} height="16" fallback={<span>Unknown</span>} />

        <div className={styles.duration}>
          <h6 className={styles.durationItem}>
            {"السعرات الحرارية : "}
            {meal.calories}
          </h6>
          <GiPowerLightning style={{ color: "#ed6109" }} />
        </div>
        <div className={styles.duration}>
          <h6 className={styles.durationItem}>
            {"الافراد : "}
            {meal.servings}
          </h6>
          <IoIosPeople style={{ color: "#ed6109" }} />
        </div>
        <div className={styles.duration}>
          <h6 className={styles.durationItem}>
            {" وقت الطهي : "}
            {meal.duration}
          </h6>
          <GiTimeBomb style={{ color: "#ed6109" }} />
        </div>
      </div>
      <div className={styles.ingredientRatingCard}>
        <div>
          <Card head={"وجباب مماثلة"} meals={similalFiveMeals} />
        </div>
        <div className={styles.ingredientsContainer}>
          <h3 className={styles.ingredientsSteps}>المقادير</h3>
          {meal.ingredients &&
            meal.ingredients.map((item, index) => {
              return (
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <h4 className={styles.index}> - {index + 1}</h4>
                    <h4 className={styles.ingItem}>{item}</h4>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
      <div className={styles.stepsContainer}>
        <h3 className={styles.ingredientsSteps}>الطريقة</h3>
        {meal.steps &&
          meal.steps.map((item, index) => {
            return (
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <h4 className={styles.index}> - {index + 1}</h4>
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
