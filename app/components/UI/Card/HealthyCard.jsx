import styles from "./Card.module.css";
const HealthyCard = ({ meals }) => {
  return (
    <div className="flex border  mx-1 shadow-lg rounded-lg">
      <div className="flex">
        <div className="bg-red-800 w-[30%] h-full">
          <img
            className="w-full h-full flex"
            src={meals.imageUrl}
            alt={meals.title}
          />
        </div>
        <div className=" w-[70%] h-full justify-center items-center">
          <div className="flex justify-center items-center">
            <h4>{meals.title}</h4>
          </div>
          <div
            className={`${styles.ingredients} flex justify-center items-center text-center px-2`}
          >
            <h4>{meals.ingredients}</h4>
          </div>
        </div>
      </div>
      {/* pc card
      <div className="xl:flex mx-1 items-center justify-between hidden shadow-lg gap-2">
        <div className=" w-1/3 ">
          <img
            className="flex justify-stretch w-full h-full "
            src={meals.imageUrl}
            // src={meals.imageUrl[0]}
            alt={meals.title}
          />
        </div>
        <div className="w-2/3 flex items-center justify-between gap-2 flex-col">
          <div className="flex justify-center items-center">
            <a className="no-underline text-center text-primary" href="#">
              {meals.title}
            </a>
          </div>
          <div className="flex justify-center items-center">
            <p className={`${styles.ingredients} text-center overflow-auto`}>
              {meals.ingredients}
            </p>
          </div>
        </div>
      </div> */}
      {/* Mobile Card */}
    </div>
  );
};

export default HealthyCard;
