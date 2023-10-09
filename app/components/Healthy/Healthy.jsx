// "use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Healthy.module.css";
import Link from "next/link";
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
    <div className={styles.container}>
      <h4 className={styles.healthyHeader}>وصفات صحية</h4>
      <div className={styles.healthyMeals}>
        {topHealthy.map((item) => {
          return (
            <>
              <div className={styles.imageContainer}>
                <Link href={`/showRecipe/${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.image}
                  />
                </Link>
              </div>
              <div className={styles.titleIngredients}>
                <div>
                  <Link href={`/showRecipe/${item.id}`}>
                    <h4 className={styles.title}>{item.title}</h4>
                  </Link>
                </div>
                <div>
                  <p className={styles.ingredients}>{item.ingredients}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <div className={styles.btnContainer}>
        <button className={styles.btn}>المزيد</button>
      </div> */}
      <div className={styles.advertisment}>
        <h4>advertisment</h4>
      </div>
    </div>
  );
};

export default Healthy;
