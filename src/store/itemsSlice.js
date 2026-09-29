import { createSlice } from "@reduxjs/toolkit";

import cocaColaImg from "../assets/coca-cola.jpg";
import pepsiImg from "../assets/pepsi.jpg";
import thumbsUpImg from "../assets/thumbs-up.jpg";
import cocaBottleImg from "../assets/coca-bottle.jpg";
import pepBottleImg from "../assets/pep-bottle.jpg";
import thumbsBottleImg from "../assets/thumbs-bottle.jpeg";

import appleImg from "../assets/apple.jpg";
import bananaImg from "../assets/banana.jpg";
import breadImg from "../assets/bread.jpeg";
import milkImg from "../assets/milk.jpg";
import onionImg from "../assets/onion.jpg";
import potatoImg from "../assets/potato.jpg";

const DEFAULT_ITEMS = [
  {
    id: "1",
    image: cocaColaImg,
    item_name: "Coca Cola",
    price: 40,
    volume: "400ml",
    delivery_time: "10 mins",
    availability: "inStock",
    category: "cold-drink",
  },
  {
    id: "2",
    image: pepsiImg,
    item_name: "Pepsi",
    price: 40,
    volume: "400ml",
    delivery_time: "10 mins",
    availability: "inStock",
    category: "cold-drink",
  },
  {
    id: "3",
    image: thumbsUpImg,
    item_name: "Thumbs Up",
    price: 40,
    volume: "400ml",
    delivery_time: "10 mins",
    availability: "inStock",
    category: "cold-drink",
  },
  {
    id: "4",
    image: cocaBottleImg,
    item_name: "Coca Cola",
    price: 20,
    volume: "200ml",
    delivery_time: "10 mins",
    availability: "outOfStock",
    category: "cold-drink",
  },
  {
    id: "5",
    image: pepBottleImg,
    item_name: "Pepsi",
    price: 20,
    volume: "200ml",
    delivery_time: "10 mins",
    availability: "outOfStock",
    category: "cold-drink",
  },
  {
    id: "6",
    image: thumbsBottleImg,
    item_name: "Thumbs Up",
    price: 20,
    volume: "200ml",
    delivery_time: "10 mins",
    availability: "outOfStock",
    category: "cold-drink",
  },
    {
    id: "7",
    image: appleImg,
    item_name: "Apple",
    price: 100,
    volume: "1kg",
    delivery_time: "10 mins",
    availability: "inStock",
    category: "grocery",
  },
  {
    id: "8",
    image: bananaImg,
    item_name: "Banana",
    price: 50,
    volume: "12pcs",
    delivery_time: "10 mins",
    availability: "inStock",
    category: "grocery",
  },
  {
    id: "9",
    image: breadImg,
    item_name: "bread",
    price: 50,
    volume: "Big",
    delivery_time: "10 mins",
    availability: "inStock",
    category: "grocery",
  },
  {
    id: "10",
    image: milkImg,
    item_name: "Milk",
    price: 25,
    volume: "500ml",
    delivery_time: "10 mins",
    availability: "outOfStock",
    category: "grocery",
  },
  {
    id: "11",
    image: onionImg,
    item_name: "Onion",
    price: 40,
    volume: "1kg",
    delivery_time: "10 mins",
    availability: "outOfStock",
    category: "grocery",
  },
  {
    id: "12",
    image: potatoImg,
    item_name: "Potato",
    price: 50,
    volume: "1kg",
    delivery_time: "10 mins",
    availability: "outOfStock",
    category: "grocery",
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
