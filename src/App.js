import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from "./components/Homepage/Homepage";
import { Contact } from "./components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
