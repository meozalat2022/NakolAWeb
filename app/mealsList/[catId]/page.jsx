"use client";
import React, { useEffect } from "react";
import MealsListCard from "../../components/UI/Card/MealsListCard";
import styles from "./mealsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsByCategory } from "../../redux/reducers/mealSlice";
import { MEALS } from "@/app/data/meals";
const MealsList = ({ params }) => {
  // const pathname = usePathname();
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.mealsByCatData);

  useEffect(() => {
    dispatch(fetchMealsByCategory(params.catId));
  }, [params.catId]);

  return (
    <div className="flex justify-center flex-wrap ">
      {mealsList.map((item, index) => (
        <MealsListCard key={index} mealsList={item} />
      ))}
    </div>
  );
};

export default MealsList;
