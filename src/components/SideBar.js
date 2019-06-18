import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { showSideBar, hideSideBar } from "../actions";
import { connect } from "react-redux";

import HomePage from "./HomePage";

class SideBar extends Component {
  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            onHide={this.props.hideSideBar}
            vertical
            visible={this.props.visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gripfire" />
              Trending
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="file video" />
              Subcriptions
            </Menu.Item>
            <Menu.Item as="a">
              <hr />
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="folder outline" />
              Library
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="history" />
              History
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="clock outline" />
              Watch later
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={this.props.visible}>
            <Segment basic>
              <div style={{ height: "100vh" }}>
                <HomePage />
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    visible: state.visible
  };
};

export default connect(
  mapStateToProps,
  { showSideBar, hideSideBar }
)(SideBar);
