import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import VideoList from "./VideoList";
import SearchList from "./SearchList";
import VideoSelected from "./VideoSelected";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <VideoSelected />
      </div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/searchlist" component={SearchList} />
            <Route path="/videolist" component={VideoList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
