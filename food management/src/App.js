import "./App.css";
import React, { useState } from "react";
import Login from "./components/login/login";
import Header from "./components/header/header";
import Register from "./components/registration/registration";
import Details from "./components/details/details";
import Donation from "./components/donation/donation";
import { userContext } from "./reusable-components/createContext";
import { userContext2 } from "./reusable-components/createContext2";
import { userId } from "./reusable-components/logindetailscontext";
import About from "../src/components/about/about";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [value, setValue] = useState(false);
  const [area, setArea] = useState("");
  const [userDetails, setUserDetails] = useState("");

  return (
    <React.Fragment>
      <Router>
        <userContext2.Provider value={{ area, setArea }}>
          <userId.Provider value={{ userDetails, setUserDetails }}>
            <userContext.Provider value={{ value, setValue }}>
              <Header />

              <Route path="/" exact component={Login} />

              <Route path="/checkFood" component={Details} />
            </userContext.Provider>
          </userId.Provider>
        </userContext2.Provider>
        <Route path="/register" component={Register} />
        <Route path="/donation" component={Donation} />
        <Route path="/about" component={About} />
      </Router>
    </React.Fragment>
  );
}

export default App;
