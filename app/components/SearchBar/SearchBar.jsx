"use client";
import React from "react";
import styles from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import RecipeNavList from "../RecipeNavList/RecipeNavList";
import Link from "next/link";
const SearchBar = () => {
  const categories = useSelector((state) => state.category.data);
  if (!categories || categories.length < 1) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <RecipeNavList navList={categories} />
      <Link href={"/SearchMeal"}>
        <div className={styles.searchBar}>
          <div className={styles.searchText}>
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
