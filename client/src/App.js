import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GeneralIssues from "./GeneralPage/GeneralIssues";
import Detail from "./GeneralPage/Detail";
import NoMatch from "./GeneralPage/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={GeneralIssues} />
        <Route exact path="/generalissues" component={GeneralIssues} />
        <Route exact path="/generalissues/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
