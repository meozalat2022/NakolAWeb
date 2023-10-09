"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/config";

const initialState = {
  data: [],
  // categ: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (buidler) => {
    buidler.addCase(fetchCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    // .addCase(fetchCategory.fulfilled, (state, action) => {
    //   state.categ = action.payload;
    // });
  },
});

export default categorySlice.reducer;

export const fetchCategories = createAsyncThunk("fetchCat/get", async () => {
  try {
    const categoriesCollection = collection(db, "Category");
    // const mealsData = (await getMeals).docs.map((item) => {

    const categoryList = getDocs(categoriesCollection);
    const catgoriesData = (await categoryList).docs.map((item) => {
      const data = item.data();
      data.id = item.id;
      return data;
    });
    const sortedCat = [];
    for (let i in catgoriesData) {
      sortedCat.push({
        image: catgoriesData[i].image,
        title: catgoriesData[i].title,
        icon: catgoriesData[i].icon,
        id: catgoriesData[i].id,
        sort: catgoriesData[i].sort,
      });
    }

    sortedCat.sort(function (a, b) {
      return a.sort - b.sort;
    });
    return sortedCat;
  } catch (error) {
    console.log("error", error);
  }
});

// export const fetchCategory = createAsyncThunk(
//   "singleCat/get",
//   async (catId) => {
//     try {
//       const caregoryCollection = doc(db, "Category", catId);
//       const getCat = await getDoc(caregoryCollection);
//       if (getCat.exists) {
//         return getCat.data();
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   }
// );
