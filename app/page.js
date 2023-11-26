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

  useEffect(() => {
    setLoading(true);
    // dispatch(fetchCategories());
    // dispatch(fetchLatestMeals());
    // dispatch(fetchHealthyMeals());
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div className="bg-white w-full h-screen  flex items-center justify-center mt-10">
        <img className="w-40" src="/loading.gif" alt="loading" />
      </div>
    );
  }
  return (
    <main className="w-auto">
      <HomePage />
    </main>
  );
}
