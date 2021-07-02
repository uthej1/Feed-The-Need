import React from "react";
import Input from "../../reusable-components/input/input";
import Button from "../../reusable-components/button/button";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

const Register = () => {
  let history = useHistory();

  const submit = () => {
    const name = document.getElementsByName("name")[0].value;
    const mobileNumber = document.getElementsByName("mobileNumber")[0].value;
    const gmail = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;

    if (name === "" || mobileNumber === "" || gmail === "" || password === "") {
      alert("enter all the fields");
    } else {
      axios
        .post("http://localhost:5000/registration", {
          name,
          mobileNumber,
          gmail,
          password,
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
    <div className="card mx-auto" style={{ width: "50%", padding: "50px" }}>
      <Input placeholder="enter Full Name" name="name" />
      <Input placeholder="enter email address" name="email" />
      <Input placeholder="password" name="password" />
      <Input placeholder="confirm password" name="confirm_password" />
      <Input placeholder="mobile number" name="mobileNumber" />
      <Button clicked={() => submit} name="submit" />
    </div>
  );
};
export default Register;
