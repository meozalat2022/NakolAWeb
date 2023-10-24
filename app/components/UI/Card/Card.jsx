import Image from "next/image";
import styles from "./Card.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { CATEGORIES } from "../../../data/categories";
const Card = ({ meals, key, catId }) => {
  const cat = useSelector((state) => state.category.data);
  const catTitle = CATEGORIES.find((item) => item.id === meals.categoryId);
  const ingredientsArr = meals.ingredients.slice(0, 2);
  return (
    <div className=" hover:shadow-2xl w-full shadow-lg rounded-md mt-1 md:w-1/2 lg:w-1/4 xl:w-1/6  px-2 flex flex-col justify-between items-center p-1 mx-1">
      <Link className="w-full h-full " href={`/showRecipe/${meals.id}`}>
        <h3 className="text-center hover:text-accent overflow-hidden text-primary text-sm">
          {meals.title}
        </h3>
      </Link>
      <Link href={`/showRecipe/${meals.id}`}>
        <div className="-z-10 relative ">
          <img
            className="w-36 h-36  p-1 rounded-md border border-double border-b-4 border-accent "
            src={meals.imageUrl}
            // src={meals.imageUrl[0]}
            alt={meals.title}
          />
        </div>
      </Link>
      <div className="w-full h-full flex justify-center items-center">
        <h5 className={`${styles.ingredients} text-center mb-2`}>
          {ingredientsArr}...شاهد المزيد
        </h5>
      </div>
      <Link
        className=" w-full h-full"
        href={`/mealsList/${catTitle && catTitle.id}`}
      >
        <p className="text-accent font-bold">{catTitle && catTitle.title}</p>
      </Link>
    </div>
  );
};

export default Card;
