"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLatestMeals } from "../../redux/reducers/mealSlice";
import styles from "./LatestTenMeals.module.css";
import Card from "../UI/Card/Card";
const LatestTenMeals = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchLatestMeals());
  }, []);
  const latestTenMeals = useSelector((state) => state.meals.latestMeals);

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
    <div className={styles.container}>
      {latestTenMeals.map((item, index) => {
        return <Card meals={item} key={item.id} />;
      })}
    </div>
  );
};

export default LatestTenMeals;
