"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMeals } from "../redux/reducers/mealSlice";
import styles from "./SearchMeal.module.css";
import Link from "next/link";
import { MEALS } from "../data/meals";
const SearchMeal = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const meals = useSelector((state) => state.meals.data);

  useEffect(() => {
    // dispatch(fetchMeals());
  }, []);

  // if (!meals || meals.length < 1) {
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
    <div className={styles.container}>
      <input
        type="text"
        placeholder="بحث عن وصفة"
        autoFocus
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div
        style={{ opacity: searchTerm === "" ? 0 : 1 }}
        className={styles.mealContainer}
      >
        {MEALS.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((item) => {
          return (
            <div className={styles.card}>
              <Link
                href={`/showRecipe/${item.id}`}
                className={styles.imageContainer}
              >
                <img
                  className={styles.image}
                  src={item.imageUrl}
                  alt={item.title}
                />
              </Link>
              <div className={styles.titleIngredients}>
                <Link href={`/showRecipe/${item.id}`}>
                  <h4 className={styles.title}>{item.title}</h4>
                </Link>
                <p className={styles.ingredients}>
                  {item.ingredients.slice(0, 3)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchMeal;
