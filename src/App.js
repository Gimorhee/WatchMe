import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from "./components/Homepage/Homepage";
import { Contact1 } from "./components/Contact/Contact1";
import { Contact2 } from "./components/Contact/Contact2";
import { Contact3 } from "./components/Contact/Contact3";
import { Contact4 } from "./components/Contact/Contact4";
import { Contact5 } from "./components/Contact/Contact5";
import { Contact6 } from "./components/Contact/Contact6";
import { Contact7 } from "./components/Contact/Contact7";

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
          <Route exact path="/contact4" component={Contact4} />
          <Route exact path="/contact5" component={Contact5} />
          <Route exact path="/contact6" component={Contact6} />
          <Route exact path="/contact7" component={Contact7} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
