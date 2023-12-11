"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLatestMeals } from "../../redux/reducers/mealSlice";
import styles from "./LatestTenMeals.module.css";
import Card from "../UI/Card/Card";
import { CATEGORIES } from "../../data/categories";
import { MEALS } from "../../data/meals";
const LatestTenMeals = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestMeals());
  }, []);
  const latestTenMeals = useSelector((state) => state.meals.latestMeals);

  //filter latest ten meals from meals store

  // const meals = useSelector((state) => state.meals.data);

  // const latestTenMeals = [];
  // for (let i = 0; i < 10; i++) {
  //   latestTenMeals.push(meals[i]);
  // }

  // latestTenMeals.sort(function (a, b) {
  //   return b.timestamp - a.timestamp;
  // });

  if (!latestTenMeals || latestTenMeals.length < 1) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center">
      {latestTenMeals.map((item, index) => {
        return <Card meals={item} key={index} />;
      })}
    </div>
  );
};

export default LatestTenMeals;
