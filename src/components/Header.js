import React from "react";
import GoogleAuth from "./GoogleAuth";
import SearchBar from "./SearchBar";
import "./index.css";

const Header = () => {
  return (
    <div className="header ui segment">
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <p>Youtube</p>
          </div>
          <div className="eight wide column">
            <SearchBar />
          </div>
          <div className="four wide column">
            <div className="login_button">
              <GoogleAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
