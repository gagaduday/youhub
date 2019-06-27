import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { Segment, Sidebar } from "semantic-ui-react";
import { connect } from "react-redux";

import Header from "./Header";
import VideoList from "./VideoList";
import VideoSelected from "./VideoSelected";
import SideBar from "./SideBar";
import HomePage from "./HomePage";

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
                <div style={{ height: "100vh" }}>
                  <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/search" component={VideoList} />
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
