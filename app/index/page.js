import LatestTenMeals from "../components/LatestTenMeals/LatestTenMeals";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "./HomePage.module.css";
import Healthy from "../components/Healthy/Healthy";
import RatingCard from "../components/RatingCard/RatingCard";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>

      <div className={styles.latestMealsHead}>
        <h4>احدث الوصفات</h4>
      </div>

      <div className={styles.latest}>
        <LatestTenMeals />
      </div>

      <div className={styles.healthyRatingContainer}>
        <div className={styles.healthy}>
          <Healthy />
        </div>
        <div className={styles.ratingCard}>
          <RatingCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
