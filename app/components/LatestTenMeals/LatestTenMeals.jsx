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
    // dispatch(fetchLatestMeals());
  }, []);
  // const latestTenMeals = useSelector((state) => state.meals.latestMeals);

  // if (!latestTenMeals || latestTenMeals.length < 1) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }
  return (
    <div className="flex flex-wrap justify-center">
      {MEALS.map((item, index) => {
        return <Card meals={item} key={item.id} />;
      })}
    </div>
  );
};

export default LatestTenMeals;
