import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { Segment, Sidebar } from "semantic-ui-react";
import { connect } from "react-redux";

import Header from "./Header";
import SearchList from "./SearchList";
import VideoSelected from "./VideoSelected";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import { Z_FIXED } from "zlib";

const App = props => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Sidebar.Pushable as={Segment}>
            <SideBar />
            <Sidebar.Pusher dimmed={props.visible}>
              <Segment basic>
                <div>
                  <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/search/:term" component={SearchList} />
                    <Route path="/selected/:id" component={VideoSelected} />
                  </Switch>
                </div>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.visible
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
