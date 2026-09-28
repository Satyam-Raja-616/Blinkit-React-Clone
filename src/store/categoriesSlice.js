import { createSlice } from "@reduxjs/toolkit";

import cleaningEssentialsImg from "../assets/cleaning-essentials.jpg";
import coldDrinksImg from "../assets/cold-drinks.jpg";
import groceriesImg from "../assets/groceries.jpeg";
import iceCreamsImg from "../assets/ice-creams.jpg";
import medicinesImg from "../assets/medicines.jpg";
import personalHygineImg from "../assets/personal-hygine.jpg";

const DEFAULT_CATEGORIES = [
  {
    id: "1",
    title: "Cold Drinks",
    image: coldDrinksImg,
    path: "/items",
  },
  {
    id: "2",
    title: "Groceries",
    image: groceriesImg,
    path: "#",
  },
  {
    id: "3",
    title: "Ice Creams",
    image: iceCreamsImg,
    path: "#",
  },
  {
    id: "4",
    title: "Medicines",
    image: medicinesImg,
    path: "#",
  },
  {
    id: "5",
    title: "Personal Hygine",
    image: personalHygineImg,
    path: "#",
  },
  {
    id: "6",
    title: "Cleaning Essentials",
    image: cleaningEssentialsImg,
    path: "#",
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: DEFAULT_CATEGORIES,
  reducers: {
    addInitialCategories: (state, action) => {
      return action.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
