"use client";
import React, { useEffect } from "react";
import MealsListCard from "../components/UI/Card/MealsListCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHealthyMeals } from "../redux/reducers/mealSlice";
const HealthyMealsList = () => {
  // const pathname = usePathname();
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.healthyMeals);

  useEffect(() => {
    dispatch(fetchHealthyMeals());
  }, []);

  if (!mealsList || mealsList.length < 1) {
    return (
      <div className="bg-white w-full h-screen mt-10 flex items-center justify-center">
        <img className="w-40" src="/loading.gif" alt="loading" />
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-wrap ">
      {mealsList.map((item, index) => (
        <MealsListCard key={index} mealsList={item} />
      ))}
    </div>
  );
};

export default HealthyMealsList;
