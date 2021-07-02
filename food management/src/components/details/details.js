import React, { useState, useEffect, useContext } from "react";
import Card from "../../reusable-components/card/card";
import axios from "axios";
import { userContext } from "../../reusable-components/createContext";
import { userContext2 } from "../../reusable-components/createContext2";

const Details = () => {
  const [foodDetails, updateFood] = useState([]);
  const [filteredFoodDetails, updateFilteredFoodDetails] = useState([]);
  const { setValue } = useContext(userContext);
  const { area } = useContext(userContext2);

  useEffect(() => {
    async function getData() {
      let foodDetail = await axios.get("http://localhost:5000/showfood");

      updateFood(foodDetail?.data);

      console.log("foodDetails", foodDetails);
    }
    getData();
  }, []);

  useEffect(() => {
    setValue(true);
    return () => {
      setValue(false);
    };
  });

  useEffect(() => {
    console.log("=========================", foodDetails);
    if (area && foodDetails.length) {
      const filteredFoodDetails = foodDetails.filter((food) => {
        return food.area.includes(area);
      });
      updateFilteredFoodDetails(filteredFoodDetails);
    }
  }, [area]);

  console.log("foodDetails out", foodDetails);

  const displayFood = (food, index) => {
    console.log(food);
    if (food) {
      return (
        <div key={index}>
          <Card
            id={food._id}
            hostelName={food.hostelName}
            locationUrl={food.locationUrl}
            area={food.area}
            mobileNumber={food.mobileNumber}
            quantity={food.quantity}
            name={food.name}
          />
        </div>
      );
    }
  };
  console.log("=========area======", area);
  return (
    <div sytle={{ backgroundColor: "#ccc" }}>
      {filteredFoodDetails.length && area.length ? (
        filteredFoodDetails?.map(displayFood)
      ) : area.length > 0 ? (
        <h3 style={{ margin: "20px" }}>no available food at the loacation</h3>
      ) : (
        foodDetails?.map(displayFood)
      )}
    </div>
  );
};
export default Details;
