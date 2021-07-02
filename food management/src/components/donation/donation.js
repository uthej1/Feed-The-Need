import React from "react";
import Input from "../../reusable-components/input/input";
import Button from "../../reusable-components/button/button";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

const Donation = () => {
  let history = useHistory();
  const submit = () => {
    const name = document.getElementsByName("name")[0].value;
    const mobileNumber = document.getElementsByName("mobileNumber")[0].value;
    const area = document.getElementsByName("area")[0].value;
    const locationUrl = document.getElementsByName("locationUrl")[0].value;
    const foodItems = document.getElementsByName("foodItems")[0].value;
    const quantity = document.getElementsByName("quantity")[0].value;
    const hostelName = document.getElementsByName("hostelName")[0].value;
    const from = document.getElementsByName("type")[0].value;
    if (
      name === "" ||
      mobileNumber === "" ||
      area === "" ||
      locationUrl === "" ||
      foodItems === "" ||
      quantity === "" ||
      hostelName === "" ||
      from === ""
    ) {
      alert("enter all the values");
    } else {
      axios
        .post("http://localhost:5000/donation", {
          name,
          mobileNumber,
          area,
          locationUrl,
          foodItems,
          quantity,
          hostelName,
          from,
        })
        .then(function (response) {
          history.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div className="card mx-auto" style={{ width: "40%", padding: "50px" }}>
      <Input placeholder="enter Full Name" name="name" />
      <Input placeholder="mobile number" name="mobileNumber" />
      <Input placeholder="enter Location" name="area" />
      <Input placeholder="enter location url" name="locationUrl" />
      <Input placeholder="enter food items" name="foodItems" />
      <Input placeholder="how many people can eat" name="quantity" />
      <Input placeholder="hostel/restuarent/functionhall" name="type" />
      <Input placeholder="name of the hostel/restuarent" name="hostelName" />
      <Button clicked={() => submit} name="submit" />
    </div>
  );
};
export default Donation;
