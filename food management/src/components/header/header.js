import React, { useContext } from "react";
import "./header.css";
import { useHistory } from "react-router-dom";
import Button from "../../reusable-components/button/button";
import { userContext } from "../../reusable-components/createContext";
import { userContext2 } from "../../reusable-components/createContext2";
import companyLogo from "../../assets/logo.png";

const Header = () => {
  let history = useHistory();
  const { value } = useContext(userContext);
  const { setArea } = useContext(userContext2);
  const onFilter = () => {
    setArea(document.getElementById("filterValue").value);
    document.getElementById("filterValue").value = "";
  };
  const navigate = () => {
    history.push("/donation");
  };
  const loadAbout = () => {
    history.push("/About");
  };
  console.log("header", value);
  const home = () => {
    history.push("/");
  };
  return (
    <div className="header d-flex justify-content-between align-items-center">
      <div>
        {/* <a
          onClick={() => home()}
          style={{ cursor: "pointer", marginLeft: "25px" }}
          href
        >
          Home
        </a> */}
        <img
          onClick={() => home()}
          style={{ height: "50px", cursor: "pointer" }}
          src={companyLogo}
          alt="logo"
        />
      </div>
      <div className="d-flex  align-items-center">
        {value && (
          <input
            id="filterValue"
            type="text"
            className="form-control"
            placeholder="search by area"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ marginRight: "10px" }}
          />
        )}

        {value && <Button clicked={() => onFilter} name="filter" />}

        <a
          style={{ cursor: "pointer", marginLeft: "25px" }}
          onClick={() => loadAbout()}
          href
        >
          About
        </a>

        <a
          onClick={() => navigate()}
          style={{ cursor: "pointer", marginLeft: "25px" }}
          href
        >
          Donate
        </a>
      </div>
    </div>
  );
};
export default Header;
