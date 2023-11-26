"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMeals } from "../../redux/reducers/mealSlice";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import MealsListCard from "../../components/UI/Card/MealsListCard";
import { MEALS } from "../../data/meals";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import Image from "next/image";
const SearchBox = () => {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("search");
  console.log(searchWord);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(searchWord);
  const meals = useSelector((state) => state.meals.data);
  useEffect(() => {
    // dispatch(fetchMeals());
  }, []);

  // if (!meals || meals.length < 1) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }
  const searchedMeals = MEALS.filter((val) => {
    if (searchWord == "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });

  return (
    <div className="flex flex-col  w-full self-center justify-center">
      <input
        value={searchTerm}
        className="w-1/2 flex self-center mt-5 rounded-md p-2 text-center"
        type="text"
        placeholder="بحث عن وصفة"
        autoFocus
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerm == "" && (
        <div className="h-screen w-full ">
          <h3 className="text-center mt-28">لا يوجد وصفات</h3>
        </div>
      )}
      <div>
        {!searchedMeals || searchedMeals.length < 1 ? (
          <div className="flex justify-center items-center">
            <h3 className="text-lg text-center">لا يوجد نتيجة للبحث</h3>
          </div>
        ) : (
          searchedMeals.map((item) => {
            return (
              <div className="flex justify-center">
                <MealsListCard mealsList={item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchBox;
