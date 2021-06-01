import React from "react";
import ReactDOM from "react-dom";

import { CarTool } from "./components/CarTool";
const carList = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2018,
    color: "silver",
    price: 30000,
  },
  {
    id: 2,
    make: "Nissan",
    model: "Rogue",
    year: 2021,
    color: "red",
    price: 35000,
  },
];

ReactDOM.render(
  <CarTool cars={carList}/>,
  document.querySelector("#root")
);
