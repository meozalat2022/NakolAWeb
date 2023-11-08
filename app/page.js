"use client";
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const allMeals = useSelector((state) => state.meals.data);
  // // const mealData = useSelector((state) => state.meals.meal);
  // const mealByCatData = useSelector((state) => state.meals.mealsByCatData);
  // const allCateg = useSelector((state) => state.category.data);
  // const latest = useSelector((state) => state.meals.latestMeals);
  // console.log(latest.length);
  useEffect(() => {
    setLoading(true);
    // dispatch(fetchCategories());
    // dispatch(fetchLatestMeals());
    // dispatch(fetchHealthyMeals());
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <button type="button" class="bg-indigo-500 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      </div>
    );
  }
  //<main>className="min-h-screen flex justify-between p-16"
  return (
    <main className="w-auto">
      <HomePage />
    </main>
  );
}
