import React, { useState } from "react";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = ({ cars: intialCars }) => {
  const [cars, setCars] = useState(intialCars.concat());

  const addCar = (car) => {
    setCars(
      cars.concat({
        ...car,
        id: Math.max(...cars.map((c) => c.id)) + 1,
      })
    );
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};
