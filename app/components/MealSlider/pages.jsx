import React from "react";
import { MEALS } from "@/app/data/meals";
import Slider from "react-slick";
import Slide from "../Slide/page";
const MealSlider = () => {
  const setting = {
    dots: true,
    infinite: true,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div>
      <Slider {...setting}>
        {MEALS.map((item, index) => (
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
