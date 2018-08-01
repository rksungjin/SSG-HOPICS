import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blogs from "./blogPages/Blogs";
import Detail from "./blogPages/Detail";
import NoMatch from "./blogPages/NoMatch";
import Nav from "./components/Nav";
import Main from "./components/Main/Main";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
