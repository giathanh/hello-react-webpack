import * as React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import CustomerList from "./components/Customers/List";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/customer"} component={CustomerList} />
    </Switch>
  );
}

export default Router;