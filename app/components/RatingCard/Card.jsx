import styles from "./RatingCard.module.css";
import Link from "next/link";
const Card = ({ meals, head }) => {
  return (
    <div className={styles.topContainer}>
      <h4 className={styles.bestThree}>{head}</h4>
      {meals.map((item) => {
        return (
          <Link href={`/showRecipe/${item.id}`}>
            <div className={styles.mealContainer}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              <div className={styles.title}>
                <h5>{item.title}</h5>
                <h5>{item.calories}</h5>
                {/* <h5>{item.servings}</h5> */}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
