import styles from "./Card.module.css";
const HealthyCard = ({ meals }) => {
  return (
    <>
      <div className="hidden lg:flex border  mx-1 shadow-lg rounded-lg">
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
      </div>

      {/* Mobile Card */}

      <div className="flex lg:hidden bg-red-900 m-3 w-full h-full border border-solid border-blue-700">
        <div className="flex w-full h-full p-2">
          <div className="flex w-[40%] bg-white">image</div>
          <div className="flex w-[60%] bg-yellow-300">Ingredients</div>
        </div>
      </div>
    </>
  );
};

export default HealthyCard;
