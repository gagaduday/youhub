import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import HomePage from "./HomePage";
import VideoList from "./VideoList";
import VideoSelected from "./VideoSelected";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" component={VideoList} />
            <Route path="/selected" component={VideoSelected} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
