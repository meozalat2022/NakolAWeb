import styles from "./RatingCard.module.css";
import Link from "next/link";
import { GiChefToque } from "react-icons/gi";

const Card = ({ meals, head }) => {
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="#D3D3D3" />
            <GiChefToque color="#D3D3D3" />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="#D3D3D3" />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
            <GiChefToque color="blue" />
          </div>
        );
    }
  };
  return (
    <div className="hidden lg:flex w-full h-full flex-col">
      <h4 className="flex justify-end m-4">{head}</h4>
      {meals.map((item, index) => {
        return (
          <Link
            key={index}
            className="no-underline text-sm text-primary hover:underline hover:border hover:border-double hover:border-accent hover:border-b-4 rounded-md"
            href={`/showRecipe/${item.id}`}
          >
            <div className="flex m-1 flex-col rounded-md h-full ">
              <div className="flex flex-row">
                <div className=" w-[60%]  h-[120px] max-h-32">
                  <img
                    className="w-full h-full flex"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
                <div className=" flex justify-center flex-col items-center w-[40%]">
                  <div className="p-1">
                    <span className="text-sm text-center flex pb-1">
                      {item.title}
                    </span>
                  </div>
                  <div className="w-20">
                    <span>
                      {!item.mealRating
                        ? generateRating(4)
                        : generateRating(item.mealRating)}
                    </span>
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
