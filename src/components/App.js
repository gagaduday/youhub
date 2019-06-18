import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import VideoList from "./VideoList";
import VideoSelected from "./VideoSelected";
import SideBar from "./SideBar";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />

          <Switch>
            <Route path="/" exact component={SideBar} />
            <Route path="/search" component={VideoList} />
            <Route path="/selected" component={VideoSelected} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
