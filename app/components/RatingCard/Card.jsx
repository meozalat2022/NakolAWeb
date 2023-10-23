import styles from "./RatingCard.module.css";
import Link from "next/link";
const Card = ({ meals, head }) => {
  return (
    <div className="hidden lg:flex w-full h-full flex-col">
      <h4 className="flex justify-end m-4">{head}</h4>
      {meals.map((item) => {
        return (
          <Link href={`/showRecipe/${item.id}`}>
            <div className="flex m-1 flex-col rounded-md h-full ">
              <div className="flex flex-row">
                <div className="bg-red-600 w-[60%] h-full ">
                  <img
                    className="w-full h-full flex"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
                <div className=" flex justify-center flex-col items-center w-[40%]">
                  <div>
                    <span className="text-sm text-center flex pb-1">
                      {item.title}
                    </span>
                  </div>
                  <div>
                    <span>{item.calories}</span>
                  </div>
                </div>
              </div>

              {/* <div className="flex w-3/4 h-full justify-center p-1 border border-double border-b-2 rounded-md border-primary">
                <img
                  className="w-full h-full"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              <div className=" flex flex-col items-center w-full gap-[20px]">
                <h5 className="text-center">{item.title}</h5>
                <h5>{item.calories}</h5>
                <h5>{item.servings}</h5>
              </div> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
