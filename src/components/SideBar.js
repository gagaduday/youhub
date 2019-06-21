import React, { Component } from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { showSideBar, hideSideBar } from "../actions";
import { connect } from "react-redux";

class SideBar extends Component {
  render() {
    return (
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
