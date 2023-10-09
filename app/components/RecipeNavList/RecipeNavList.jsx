import styles from "./RecipeNavList.module.css";
import Link from "next/link";
const RecipeNavList = ({ navList }) => {
  return (
    <>
      <div className={styles.navBar}>
        {navList.map((item, index) => {
          return (
            <ul>
              <Link
                href={`/mealsList/${item.id}`}
                className={styles.navListTitle}
              >
                <p className={styles.title}> - {item.title}</p>
              </Link>
            </ul>
          );
        })}
      </div>
      <div className={styles.recipeType}>
        <h5>انواع الوصفات</h5>
      </div>
    </>
  );
};

export default RecipeNavList;
