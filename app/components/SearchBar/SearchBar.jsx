"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import RecipeNavList from "../RecipeNavList/RecipeNavList";
import Link from "next/link";
import { CATEGORIES } from "@/app/data/categories";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`./SearchMeal/${search}`);
  };
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
    <div className="xl:flex hidden justify-between w-[90%] my-5 pt-6 px-2 pb-2 ">
      <RecipeNavList navList={CATEGORIES} />
      {/* <Link href={"/SearchMeal"}>
        <div className="flex flex-col self-center items-center w-[150px]">
          <div className="flex justify-end">
            <h4>بحث عن وصفة</h4>
          </div>
          <div>
            <AiOutlineSearch size={25} />
          </div>
        </div>
      </Link> */}
      {/* <div className="flex-1 ">
        <form onSubmit={handleSubmit} className="">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="بحث عن وصفة"
            className="p-2 border-accent outline-none rounded-md text-center placeholder-gray-500  bg-slate-100 "
          />
          <div className="flex justify-center mt-2">
            <button
              disabled={!search}
              type="submit"
              className="p-2 w-[80%] border-none outline-none rounded-md bg-accent text-primary font-bold text-base cursor-pointer disabled:cursor-none disabled:text-gray-100 disabled:bg-gray-400"
            >
              بحث
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default SearchBar;
