import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../reusable-components/input/input";
import Button from "../../reusable-components/button/button";
import "./login.css";
import { userId } from "../../reusable-components/logindetailscontext";

const axios = require("axios").default;

const Login = (props) => {
  console.log(props);
  const { setUserDetails } = useContext(userId);

  let history = useHistory();

  const register = () => {
    console.log("++++++++++++== login", history);

    history.push("/register");
  };

  const login = () => {
    axios
      .post("http://localhost:5000/login", {
        gmail: document.getElementsByName("gmail")[0].value,
        password: document.getElementsByName("password")[0].value,
      })
      .then(function (response) {
        console.log("============then================", response.data);

        if (response.data.isValid) {
          setUserDetails(response.data.userDetails);
          history.push("/checkFood");
        } else {
          window.alert("email or password is wrong");
        }
      })
      .catch(function (error) {
        console.log("===err===", error);

        window.alert("something went wrong");
        console.log(error);
      });
  };

  return (
    <div className=".mx-auto">
      <div className="center card .mx-auto">
        <Input placeholder="enter the email address" name="gmail" />
        <Input placeholder="enter password" name="password" />
        <div className="inline-buttons">
          <Button clicked={() => login} name="Login" />
          <Button clicked={() => register} name="Sign Up" />
        </div>
      </div>
    </div>
  );
};
export default Login;
