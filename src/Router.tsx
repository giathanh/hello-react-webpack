import * as React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import CustomerList from "./components/Customers/List";
import CustomerCreate from "./components/Customers/Create";
import CustomerEdit from "./components/Customers/Edit";
import LoginForm from "./components/Auth/Login";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/customer/add"} component={CustomerCreate} />
      <Route path={"/customer/edit"} component={CustomerEdit} />
      <Route path={"/customer"} component={CustomerList} />

      <Route path={"/login"} component={LoginForm} />
    </Switch>
  );
}

export default Router;