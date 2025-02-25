import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Common/Header/Header";
const page = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route>
          
                  */}
        </Switch>
      </Router>
    </div>
  );
};

export default page;
