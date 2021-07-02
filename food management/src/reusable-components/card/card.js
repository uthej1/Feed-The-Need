import React, { useState, useContext } from "react";
import "./card.css";
import Button from "../button/button";
import { userId } from "../../reusable-components/logindetailscontext";

const axios = require("axios").default;

const Card = (props) => {
  const { userDetails } = useContext(userId);
  let message = `${userDetails.name} accepted your food from feed for huger website. Contact details :${userDetails.mobileNumber}`;
  const [showUnavailable, updateShowUnavailable] = useState(false);
  const navigateToMaps = () => {
    window.location.href = props.locationUrl;
  };
  const onAccept = () => {
    axios
      .post("http://localhost:5000/updateDocument", {
        id: props.id,
        mobileNumber: props.mobileNumber,
        message,
      })
      .then(function (response) {
        console.log("=============================", response);
        if (response.data.isAccepted === false) updateShowUnavailable(true);
        else
          alert(
            "just now accepted by other person please refresh to know if other donors ara available"
          );
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div
      class="note card"
      style={{
        width: "18rem",
        position: "relative",
        opacity: `${showUnavailable ? "0.2" : null}`,
      }}
    >
      <h4 class="card-title">{props.hostelName}</h4>
      <p class="card-text">DonarName : {props.name}</p>

      <p class="card-text">Area : {props.area}</p>
      <p class="card-text">Available for {props.quantity} persons</p>

      <p class="card-text">contact : {props.mobileNumber}</p>
      <div style={{ display: "flex" }}>
        <Button
          name="navigateToMaps"
          disable={showUnavailable}
          clicked={() => navigateToMaps}
        />
        <Button
          name="Accept"
          disable={showUnavailable}
          clicked={() => onAccept}
        />
      </div>
      {showUnavailable && (
        <h1
          style={{
            transform: "rotate(-45deg)",
            position: "absolute",
            top: "62px",
            left: "28px",
          }}
        >
          accepted
        </h1>
      )}
    </div>
  );
};
export default Card;
