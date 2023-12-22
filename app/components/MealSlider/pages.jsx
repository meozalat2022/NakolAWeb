"use client";
import React from "react";
import { MEALS } from "@/app/data/meals";
import Slider from "react-slick";
import Slide from "../Slide/page";

import { useSelector } from "react-redux";
const MealSlider = () => {
  const allMeals = useSelector((state) => state.meals.data);
  const meals = [];
  const topFive = [];
  for (let i in allMeals) {
    meals.push({
      id: allMeals[i].id,
      title: allMeals[i]?.title,
      imageUrl: allMeals[i]?.imageUrl[0],
      mealRating: allMeals[i]?.mealRating,
      flag: allMeals[i]?.flag,
      calories: allMeals[i]?.calories,
      servings: allMeals[i]?.servings,
      duration: allMeals[i]?.duration,
      ingredients: allMeals[i]?.ingredients,
    });
  }
  meals.sort(function (a, b) {
    return b.mealRating - a.mealRating;
  });

  for (let i = 0; i < 10; i++) {
    topFive.push({
      id: meals[i]?.id,
      title: meals[i]?.title,
      imageUrl: meals[i]?.imageUrl,
      mealRating: meals[i]?.mealRating,
      flag: meals[i]?.flag,
      calories: meals[i]?.calories,
      servings: meals[i]?.servings,
      duration: meals[i]?.duration,
      ingredients: meals[i]?.ingredients,
    });
  }
  const setting = {
    dots: true,
    infinite: true,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...setting}>
        {topFive.map((item, index) => (
          <Slide
            key={index}
            id={item.id}
            title={item.title}
            image={item.imageUrl}
            flag={item.flag}
            calories={item.calories}
            servings={item.servings}
            duration={item.duration}
            ingredients={item.ingredients}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MealSlider;
