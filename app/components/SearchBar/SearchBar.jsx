"use client";
import React from "react";
import styles from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import RecipeNavList from "../RecipeNavList/RecipeNavList";
import Link from "next/link";
import { CATEGORIES } from "@/app/data/categories";
const SearchBar = () => {
  const categories = useSelector((state) => state.category.data);
  // if (!categories || categories.length < 1) {
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
  return (
    <div className="flex justify-between w-[90%] my-5 pt-6 px-2 pb-2">
      <RecipeNavList navList={CATEGORIES} />
      <Link href={"/SearchMeal"}>
        <div className="flex flex-col self-center items-center w-[150px]">
          <div className="flex justify-end">
            <h4>بحث عن وصفة</h4>
          </div>
          <div>
            <AiOutlineSearch size={25} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchBar;
