import React from "react";
import HomeLight from "../views/all-home-version/HomeLight";

import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomeLight} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
