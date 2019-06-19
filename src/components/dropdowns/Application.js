import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const Application = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          <i className="plus square outline icon" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Youtube TV</Dropdown.Item>
          <Dropdown.Item href="#">Youtube Music</Dropdown.Item>
          <Dropdown.Item href="#">Youtube Kids</Dropdown.Item>
          <Dropdown.Item href="#">Creator Academy</Dropdown.Item>
          <Dropdown.Item href="#">Youtube For Artists</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Application;
