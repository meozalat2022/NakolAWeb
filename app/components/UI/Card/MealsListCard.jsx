import Link from "next/link";
import styles from "./MealsListCard.module.css";
import Flag from "react-world-flags";
import { GiTimeBomb, GiPowerLightning } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
const MealsListCard = ({ mealsList }) => {
  const secondColumnStart = Math.ceil(mealsList.length / 2);

  const firstMealsList = mealsList.slice(0, secondColumnStart);
  const secondMealsList = mealsList.slice(secondColumnStart);

  return (
    <div className={styles.container}>
      <div style={{ width: "100%" }}>
        {firstMealsList.map((item) => {
          return (
            <ul className={styles.mealContainer}>
              <div className={styles.imageContainer}>
                <Link href={`/showRecipe/${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.image}
                  />
                </Link>
              </div>
              <div className={styles.titleIng}>
                <Link href={`/showRecipe/${item.id}`}>
                  <li className={styles.title}>{item.title}</li>
                </Link>
                <Link href={`/showRecipe/${item.id}`}>
                  <li>
                    <p className={styles.ingredients}>
                      {item.ingredients.slice(0, 4)}
                    </p>
                  </li>
                </Link>
                <div className={styles.calFlagDura}>
                  <Flag
                    code={item.flag}
                    height="16"
                    fallback={<span>Unknown</span>}
                  />

                  <div className={styles.duration}>
                    <h6 className={styles.durationItem}>
                      {"السعرات الحرارية : "}
                      {item.calories}
                    </h6>
                    <GiPowerLightning style={{ color: "#ed6109" }} />
                  </div>
                  <div className={styles.duration}>
                    <h6 className={styles.durationItem}>
                      {"الافراد : "}
                      {item.servings}
                    </h6>
                    <IoIosPeople style={{ color: "#ed6109" }} />
                  </div>
                  <div className={styles.duration}>
                    <h6 className={styles.durationItem}>
                      {" وقت الطهي : "}
                      {item.duration}
                    </h6>
                    <GiTimeBomb style={{ color: "#ed6109" }} />
                  </div>
                </div>
              </div>
            </ul>
          );
        })}
      </div>
      <div style={{ width: "100%" }}>
        {secondMealsList.map((item) => {
          return (
            <ul className={styles.mealContainer}>
              <div className={styles.imageContainer}>
                <Link href={`/showRecipe/${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.image}
                  />
                </Link>
              </div>
              <div className={styles.titleIng}>
                <Link href={`/showRecipe/${item.id}`}>
                  <li className={styles.title}>{item.title}</li>
                </Link>
                <Link href={`/showRecipe/${item.id}`}>
                  <li>
                    <p className={styles.ingredients}>
                      {item.ingredients.slice(0, 4)}
                    </p>
                  </li>
                </Link>
                <div className={styles.calFlagDura}>
                  <Flag
                    code={item.flag}
                    height="16"
                    fallback={<span>Unknown</span>}
                  />

                  <div className={styles.duration}>
                    <h6 className={styles.durationItem}>
                      {"السعرات الحرارية : "}
                      {item.calories}
                    </h6>
                    <GiPowerLightning style={{ color: "#ed6109" }} />
                  </div>
                  <div className={styles.duration}>
                    <h6 className={styles.durationItem}>
                      {"الافراد : "}
                      {item.servings}
                    </h6>
                    <IoIosPeople style={{ color: "#ed6109" }} />
                  </div>
                  <div className={styles.duration}>
                    <h6 className={styles.durationItem}>
                      {" وقت الطهي : "}
                      {item.duration}
                    </h6>
                    <GiTimeBomb style={{ color: "#ed6109" }} />
                  </div>
                </div>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default MealsListCard;
