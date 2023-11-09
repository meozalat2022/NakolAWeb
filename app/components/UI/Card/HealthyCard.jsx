import styles from "./Card.module.css";
import Link from "next/link";
const HealthyCard = ({ meals }) => {
  return (
    <>
      <Link
        href={`/showRecipe/${meals.id}`}
        className="group cursor-pointer no-underline text-sm text-black hidden hover:scale-105 border-double border-b-4 border-accent lg:flex border  mx-1 shadow-lg rounded-lg"
      >
        <div className="flex">
          <div className="w-[30%] h-full">
            <img
              className="rounded-l-md w-full h-full flex group-hover:opacity-80 transition-opacity duration-200"
              src={meals.imageUrl}
              alt={meals.title}
            />
          </div>
          <div className="w-[70%] h-full justify-center items-center">
            <div className="text-primary hover:underline flex justify-center items-center">
              <h4>{meals.title}</h4>
            </div>
            <div
              className={`${styles.ingredients} flex justify-center items-center text-center px-2`}
            >
              <h4>{meals.ingredients}</h4>
            </div>
          </div>
        </div>
      </Link>

      {/* Mobile Card */}

      <Link
        href={`/showRecipe/${meals.id}`}
        className="flex lg:hidden  m-3 w-full h-full justify-center items-end"
      >
        <div className="flex w-full h-full p-2 flex-col justify-center items-center ">
          <div className=" flex w-full">
            <img
              className=" w-full h-full flex"
              src={meals.imageUrl}
              alt={meals.title}
            />
          </div>
          <div className="flex justify-center items-center">
            <span className="text-center text-sm">{meals.title}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HealthyCard;
