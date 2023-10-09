"use client";
import { useSelector } from "react-redux";
import Card from "./Card";
const RatingCard = () => {
  const topRated = useSelector((state) => state.meals.healthyMeals);
  const topFive = topRated.slice(0, 5);
  if (!topRated || topRated.length < 1) {
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
  return <Card head={"افضل الوصفات"} meals={topFive} />;
};

export default RatingCard;
