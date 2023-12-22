"use client";
import { useSelector } from "react-redux";
import Card from "./Card";
import { MEALS } from "../../data/meals";
const RatingCard = () => {
  const allMeals = useSelector((state) => state.meals.data);

  const meals = [];
  const topFive = [];
  for (let i in allMeals) {
    meals.push({
      id: allMeals[i]?.id,
      title: allMeals[i]?.title,
      imageUrl: allMeals[i]?.imageUrl,
      mealRating: allMeals[i]?.mealRating,
    });
  }
  meals.sort(function (a, b) {
    return b.mealRating - a.mealRating;
  });

  for (let i = 0; i < 5; i++) {
    topFive.push({
      id: meals[i]?.id,
      title: meals[i]?.title,
      imageUrl: meals[i]?.imageUrl,
      mealRating: meals[i]?.mealRating,
    });
  }
  // const topFive = MEALS.slice(0, 5);
  // if (!topRated || topRated.length < 1) {
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
  return <Card head={"افضل الوصفات"} meals={topFive} />;
};

export default RatingCard;
