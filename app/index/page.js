import LatestTenMeals from "../components/LatestTenMeals/LatestTenMeals";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "./HomePage.module.css";
import Healthy from "../components/Healthy/Healthy";
import RatingCard from "../components/RatingCard/RatingCard";
import MealSlider from "../components/MealSlider/pages";
const HomePage = () => {
  return (
    <div className=" flex m-auto rounded-md flex-col my-4 items-center">
      <div>
        <SearchBar />
      </div>

      <div className="hidden md:inline-block w-[950px] max-h-[450px] mb-10">
        <h3 className=" flex justify-end bg-blackish">الأعلى تقيماً</h3>
        <MealSlider />
      </div>
      <div
        className={`${styles.latestMealsHead} mt-12 w-[80%] flex justify-end mb-1`}
      >
        <h4 className="bg-blackish">احدث الوصفات</h4>
      </div>
      <div className={styles.latest}>
        <LatestTenMeals />
      </div>
      <div className="flex justify-around items-center gap-1 w-4/5 	">
        <div className="flex justify-center self-start items-center flex-col w-4/5	">
          <Healthy />
        </div>
        <div className="flex justify-center items-center h-full w-1/5	self-start">
          <RatingCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
