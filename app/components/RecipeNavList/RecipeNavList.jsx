import styles from "./RecipeNavList.module.css";
import Link from "next/link";
const RecipeNavList = ({ navList }) => {
  return (
    <>
      <div className="flex flex-wrap flex-row-reverse justify-center items-center">
        {navList.map((item, index) => {
          return (
            <ul>
              <Link
                href={`/mealsList/${item.id}`}
                className="no-underline flex flex-wrap justify-center px-1"
              >
                <p className="text-primary hover:underline hover:text-accent">
                  {item.title}
                </p>
              </Link>
            </ul>
          );
        })}
      </div>
      <div className="flex w-[10%]  justify-center">
        <h5 className="text-base text-primary underline font-bold">
          انواع الوصفات
        </h5>
      </div>
    </>
  );
};

export default RecipeNavList;
