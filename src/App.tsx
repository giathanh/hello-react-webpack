import * as React from "react";
import {Link, Route, BrowserRouter, Switch} from "react-router-dom";

import Router from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <Link to={"/customer"}> Customer</Link>
            </li>
          </ul>
        </nav>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;