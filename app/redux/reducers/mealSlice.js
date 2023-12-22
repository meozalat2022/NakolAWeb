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
  limit,
} from "firebase/firestore";
import { db } from "@/config";
const initialState = {
  data: [],
  meal: [],
  mealsByCatData: [],
  latestMeals: [],
  healthyMeals: [],
};

const mealSlice = createSlice({
  name: "meal",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchSingleMeal.fulfilled, (state, action) => {
        state.meal = action.payload;
      })
      .addCase(fetchMealsByCategory.fulfilled, (state, action) => {
        state.mealsByCatData = action.payload;
      })
      .addCase(fetchLatestMeals.fulfilled, (state, action) => {
        state.latestMeals = action.payload;
      })
      .addCase(fetchHealthyMeals.fulfilled, (state, action) => {
        state.healthyMeals = action.payload;
      });
  },
});

export default mealSlice.reducer;

export const fetchMeals = createAsyncThunk("meal/get", async () => {
  try {
    const mealsCollection = collection(db, "Meal");
    const getMeals = getDocs(mealsCollection);
    const mealsData = (await getMeals).docs.map((item) => {
      const data = item.data();
      data.id = item.id;
      return data;
    });
    const sortedMeals = [];
    for (let i in mealsData) {
      sortedMeals.push({
        title: mealsData[i].title,
        ingredients: mealsData[i].ingredients,
        imageUrl: mealsData[i].imageUrl,
        id: mealsData[i].id,
        timestamp: mealsData[i].timestamp,
        mealRating: mealsData[i].mealRating,
      });
    }
    sortedMeals.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    return mealsData;
  } catch (error) {
    console.log("error", error);
  }
});
export const fetchLatestMeals = createAsyncThunk("latestMeal/get", async () => {
  try {
    const mealsCollection = collection(db, "Meal");
    const q = query(mealsCollection, limit(5));
    const getMeals = getDocs(q);
    const mealsData = (await getMeals).docs.map((item) => {
      const data = item.data();
      data.id = item.id;
      return data;
    });
    const sortedMeals = [];
    for (let i in mealsData) {
      sortedMeals.push({
        servings: mealsData[i].servings,
        calories: mealsData[i].calories,
        title: mealsData[i].title,
        imageUrl: mealsData[i].imageUrl,
        id: mealsData[i].id,
        categoryId: mealsData[i].categoryIds[0],
        timestamp: mealsData[i].timestamp,
        ingredients: mealsData[i].ingredients,
        mealRating: mealsData[i].mealRating,
      });
    }
    sortedMeals.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    return sortedMeals;
  } catch (error) {
    console.log("error", error);
  }
});

export const fetchHealthyMeals = createAsyncThunk(
  "healthyMeal/get",
  async () => {
    try {
      const mealsCollection = collection(db, "Meal");
      const q = query(mealsCollection, limit(40));
      const getMeals = getDocs(q);
      const mealsData = (await getMeals).docs.map((item) => {
        const data = item.data();
        data.id = item.id;
        return data;
      });
      const sortedMeals = [];
      for (let i in mealsData) {
        if (mealsData[i].calories && mealsData[i].calories > 0) {
          sortedMeals.push({
            servings: mealsData[i].servings,
            title: mealsData[i].title,
            imageUrl: mealsData[i].imageUrl,
            id: mealsData[i].id,
            timestamp: mealsData[i].timestamp,
            calories: mealsData[i].calories,
            ingredients: mealsData[i].ingredients,
            mealRating: mealsData[i].mealRating,
          });
          sortedMeals.sort(function (a, b) {
            return a.calories - b.calories;
          });
        }
      }
      return sortedMeals;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const fetchSingleMeal = createAsyncThunk(
  "singleMeal/get",
  async (mealId) => {
    try {
      const mealCollection = doc(db, "Meal", mealId);
      const getMeal = await getDoc(mealCollection);
      if (getMeal.exists) {
        return getMeal.data();
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const fetchMealsByCategory = createAsyncThunk(
  "getMealsByCat/get",
  async (catId) => {
    try {
      const mealsList = [];
      const mealsCollection = collection(db, "Meal");
      const mealsQuery = query(
        mealsCollection,
        where("categoryIds", "array-contains", catId)
        // limit(3)
      );
      const querySnapshot = await getDocs(mealsQuery);
      querySnapshot.forEach((doc) => {
        const {
          imageUrl,
          title,
          categoryIds,
          ingredients,
          calories,
          servings,
          flag,
        } = doc.data();
        const id = doc.id;
        mealsList.push({
          id: id,
          imageUrl,
          title,
          ingredients,
          calories,
          servings,
          flag,
          categoryIds,
        });
      });
      // console.log("1111111111111", mealsList);
      return mealsList;
    } catch (error) {
      console.log("error", error);
    }
  }
);
