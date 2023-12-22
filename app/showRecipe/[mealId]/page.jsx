"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleMeal,
  fetchMealsByCategory,
} from "../../redux/reducers/mealSlice";
import styles from "./showRecipe.module.css";
import Flag from "react-world-flags";
import { GiTimeBomb, GiPowerLightning } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import Card from "../../components/RatingCard/Card";
// import { MEALS } from "@/app/data/meals";
import { GiChefToque } from "react-icons/gi";
import Modal from "react-modal";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../../../config";
const ShowRecipe = ({ params }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const meal = useSelector((state) => state.meals.meal);
  const similarMeals = useSelector((state) => state.meals.mealsByCatData);
  const similalFiveMeals = similarMeals.slice(0, 5);
  // const meal = MEALS.find((item) => item.id === params.mealId);
  useEffect(() => {
    dispatch(fetchSingleMeal(params.mealId));
  }, [params.mealId]);
  useEffect(() => {
    if (!meal || !meal.categoryIds || meal.categoryIds.length < 1) {
      return;
    } else {
      dispatch(fetchMealsByCategory(meal?.categoryIds[0]));
    }
  }, []);

  const updateMeal = async () => {
    setOpen(true);

    const updatedMealDoc = doc(db, "Meal", params.mealId);
    await updateDoc(updatedMealDoc, {
      mealRating: rating,
    });
    setOpen(false);
  };

  if (!meal) {
    return (
      <div className="bg-white w-full h-screen mt-10 flex items-center justify-center">
        <img className="w-40" src="/loading.gif" alt="loading" />
      </div>
    );
  }

  return (
    <div className="flex  items-center justify-center flex-col my-6 w-full">
      <div className="mb-6">
        <h3 className="mt-4 text-primary hover:text-accent hover:underline font-bold">
          {meal?.title}
        </h3>
      </div>
      <div className="w-1/2 h-1/2 flex justify-center items-center">
        <img
          className="hover:opacity-80 w-[90%] h-[90%] p-1 rounded-md border border-double border-accent border-b-4 max-h-80"
          src={meal?.imageUrl}
          alt={meal?.title}
        />
      </div>
      <div className="flex  my-4 p-2 justify-center items-center">
        <Flag code={meal?.flag} height="16" fallback={<span>{}</span>} />

        <div className="flex hover:underline justify-between items-center">
          <h6 className={`${styles.durationItem} px-5`}>
            {"السعرات الحرارية : "}
            {meal?.calories}
          </h6>
          <GiPowerLightning style={{ color: "#ed6109" }} />
        </div>
        <div className="flex hover:underline justify-between items-center">
          <h6 className={`${styles.durationItem} px-5`}>
            {"الافراد : "}
            {meal?.servings}
          </h6>
          <IoIosPeople style={{ color: "#ed6109" }} />
        </div>
        <div className="flex hover:underline justify-between items-center">
          <h6 className={`${styles.durationItem} px-5`}>
            {" وقت الطهي : "}
            {meal?.duration}
          </h6>
          <GiTimeBomb style={{ color: "#ed6109" }} />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex w-[20%] ml-4">
          <Card head={"وجباب مماثلة"} meals={similalFiveMeals} />
        </div>
        <div className="flex flex-col  mr-9">
          <h3 className="flex justify-end my-6">المقادير</h3>
          {meal?.ingredients &&
            meal?.ingredients.map((item, index) => {
              return (
                <ul key={index} className="list-none mb-10">
                  <li className="flex flex-row-reverse">
                    <h4 className="flex min-w-[30px] justify-end ml-2">
                      {" "}
                      - {index + 1}
                    </h4>
                    <h4 className={styles.ingItem}>{item}</h4>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col self-end mr-9">
        <h3 className="flex justify-end my-6">الطريقة</h3>
        {meal?.steps &&
          meal?.steps.map((item, index) => {
            return (
              <ul key={index} className="list-none mb-10">
                <li className="flex flex-row-reverse">
                  <h4 className="flex min-w-[30px] justify-end ml-2">
                    {" "}
                    - {index + 1}
                  </h4>
                  <h4 className={styles.ingItem}>{item}</h4>
                </li>
              </ul>
            );
          })}
      </div>
      <div>
        <h4 className="text-center">قيم الوصفة</h4>
        {[...Array(5)].map((item, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                className="hidden"
                type="radio"
                name="rating"
                value={currentRating}
                onClick={updateMeal}
              />
              <GiChefToque
                className="cursor-pointer"
                size={35}
                color={currentRating <= (hover || rating) ? "blue" : "#D3D3D3"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      {open && (
        <Modal
          isOpen={open}
          className="p-6 max-w-lg w-[100px] h-[100px] absolute top-56 left-[50%] translate-x-[-50%] bg-white rounded-full shadow-2xl outline-none"
        >
          <div className="flex flex-col justify-center pt-4">
            <span className="text-center text-primary font-bold">
              شكرا للتقييم
            </span>
            <img
              width={40}
              height={40}
              style={{
                marginLeft: 30,
                marginTop: 20,
                borderRadius: 25,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
              src="/check.gif"
              alt="tanks"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ShowRecipe;
