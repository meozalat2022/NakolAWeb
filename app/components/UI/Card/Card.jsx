import Image from "next/image";
import styles from "./Card.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
const Card = ({ meals, key, catId }) => {
  const cat = useSelector((state) => state.category.data);
  const catTitle = cat.find((item) => item.id === meals.categoryId);
  const ingredientsArr = meals.ingredients.slice(0, 2);
  return (
    <div className={styles.container}>
      <Link href={`/showRecipe/${meals.id}`}>
        <h3 className={styles.title}>{meals.title}</h3>
      </Link>
      <Link href={`/showRecipe/${meals.id}`}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            fill={true}
            src={meals.imageUrl[0]}
            alt={meals.title}
          />
        </div>
      </Link>
      <ul>
        <li className={styles.list}>
          <h5 className={styles.ingredients}>{ingredientsArr}...شاهد المزيد</h5>
        </li>
      </ul>
      <Link href={`/mealsList/${catTitle && catTitle.id}`}>
        <p className={styles.categoryTitle}>{catTitle && catTitle.title}</p>
      </Link>
    </div>
  );
};

export default Card;
