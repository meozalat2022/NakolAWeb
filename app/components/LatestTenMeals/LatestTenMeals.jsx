"use client";
import { Fragment, useEffect } from "react";
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
      <div className="bg-white w-full h-screen mt-10 flex items-center justify-center">
        <img className="w-40" src="/cooking_spinner.gif" alt="loading" />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center">
      {latestTenMeals.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <Card meals={item} key={index} />;
          </Fragment>
        );
      })}
    </div>
  );
};

export default LatestTenMeals;
