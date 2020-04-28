import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from "./components/Homepage/Homepage";
import { Contact1 } from "./components/Contact/Contact1";
import { Contact2 } from "./components/Contact/Contact2";
import { Contact3 } from "./components/Contact/Contact3";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact1" component={Contact1} />
          <Route exact path="/contact2" component={Contact2} />
          <Route exact path="/contact3" component={Contact3} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
