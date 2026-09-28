import { createSlice } from "@reduxjs/toolkit";

import cocaColaImg from "../assets/coca-cola.jpg";
import pepsiImg from "../assets/pepsi.jpg";
import thumbsUpImg from "../assets/thumbs-up.jpg";
import cocaBottleImg from "../assets/coca-bottle.jpg";
import pepBottleImg from "../assets/pep-bottle.jpg";
import thumbsBottleImg from "../assets/thumbs-bottle.jpeg";

const DEFAULT_ITEMS = [
  {
    id: "1",
    image: cocaColaImg,
    item_name: "Coca Cola",
    price: 40,
    volume: "400ml",
    delivery_time: "10 mins",
    availability: "inStock",
  },
  {
    id: "2",
    image: pepsiImg,
    item_name: "Pepsi",
    price: 40,
    volume: "400ml",
    delivery_time: "10 mins",
    availability: "inStock",
  },
  {
    id: "3",
    image: thumbsUpImg,
    item_name: "Thumbs Up",
    price: 40,
    volume: "400ml",
    delivery_time: "10 mins",
    availability: "inStock",
  },
  {
    id: "4",
    image: cocaBottleImg,
    item_name: "Coca Cola",
    price: 20,
    volume: "200ml",
    delivery_time: "10 mins",
    availability: "outOfStock",
  },
  {
    id: "5",
    image: pepBottleImg,
    item_name: "Pepsi",
    price: 20,
    volume: "200ml",
    delivery_time: "10 mins",
    availability: "outOfStock",
  },
  {
    id: "6",
    image: thumbsBottleImg,
    item_name: "Thumbs Up",
    price: 20,
    volume: "200ml",
    delivery_time: "10 mins",
    availability: "outOfStock",
  },
];

const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
