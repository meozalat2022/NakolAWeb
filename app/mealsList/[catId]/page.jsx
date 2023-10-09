"use client";
import React, { useEffect } from "react";
import MealsListCard from "../../components/UI/Card/MealsListCard";
import styles from "./mealsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsByCategory } from "../../redux/reducers/mealSlice";
const MealsList = ({ params }) => {
  // const pathname = usePathname();
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.mealsByCatData);

  // useEffect(() => {
  //   dispatch(fetchMealsByCategory(params.catId));
  // }, [params.catId]);

  return (
    <div className={styles.container}>
      <MealsListCard mealsList={mealsList} />
    </div>
  );
};

export default MealsList;
