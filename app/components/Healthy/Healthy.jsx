// "use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Healthy.module.css";
import Link from "next/link";
import { CATEGORIES } from "../../data/categories";
import { MEALS } from "../../data/meals";
import HealthyCard from "../UI/Card/HealthyCard";
const Healthy = () => {
  const healthy = useSelector((state) => state.meals.healthyMeals);

  const topHealthy = healthy.slice(0, 3);

  if (!healthy || healthy.length < 1) {
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
    <div className="flex flex-col items-center  w-full">
      <div className="w-full flex xl:justify-end justify-center">
        <h3>وصفات صحية</h3>
      </div>
      <div className=" w-full xl:grid xl:grid-cols-3">
        {topHealthy.map((item) => {
          return <HealthyCard meals={item} />;
        })}
      </div>
      <div className="hidden lg:flex justify-end m-1">
        <Link
          href="./healthyMealsList"
          className="cursor-pointer mt-10 bg-primary border border-none py-4 px-8 rounded-lg"
        >
          <span className="text-white">المزيد</span>
        </Link>
      </div>
      <div className="w-full">
        <h4>advertisment</h4>
      </div>
    </div>
  );
};

export default Healthy;
