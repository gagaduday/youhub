import React from "react";
import { Link } from "react-router-dom";
import { showSideBar } from "../actions";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import GoogleAuth from "./GoogleAuth";
import SearchBar from "./SearchBar";
import UploadVideo from "./dropdowns/UploadVideo";
import Application from "./dropdowns/Application";
import Message from "./dropdowns/Message";
import Notification from "./dropdowns/Notification";

import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header ui segment">
        <div className="ui grid">
          <div className="ui row">
            <div className="four wide column">
              <div>
                <Button.Group className="button_sidebar">
                  <Button
                    disabled={this.props.visible}
                    onClick={this.props.showSideBar}
                  >
                    <i className="youtube square red icon" />
                  </Button>
                </Button.Group>
              </div>
              <Link to="/">
                <div className="hub">
                  <span>You</span>
                  <span>Hub</span>
                </div>
              </Link>
            </div>
            <div className="eight wide column">
              <SearchBar />
            </div>
            <div className="four wide column">
              <div className="login_button">
                <GoogleAuth />
              </div>
              <div className="dropdown">
                <UploadVideo />
              </div>
              <div className="dropdown">
                <Application />
              </div>
              <div className="dropdown">
                <Message />
              </div>
              <div className="dropdown">
                <Notification />
              </div>
            </div>
          </div>
        </div>
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
  { showSideBar }
)(Header);
