"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMeals,
  fetchSingleMeal,
  fetchMealsByCategory,
  fetchLatestMeals,
  fetchHealthyMeals,
} from "./redux/reducers/mealSlice";
import { fetchCategories } from "./redux/reducers/categorySlice";
import HomePage from "./index/page";

export default function Home() {
  const dispatch = useDispatch();
  // const allMeals = useSelector((state) => state.meals.data);
  // // const mealData = useSelector((state) => state.meals.meal);
  // const mealByCatData = useSelector((state) => state.meals.mealsByCatData);
  // const allCateg = useSelector((state) => state.category.data);
  // const latest = useSelector((state) => state.meals.latestMeals);
  // console.log(latest.length);
  useEffect(() => {
    // dispatch(fetchCategories());
    // dispatch(fetchLatestMeals());
    // dispatch(fetchHealthyMeals());
  }, []);

  return (
    <main>
      <HomePage />
    </main>
  );
}
