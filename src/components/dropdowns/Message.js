import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Message = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          <i className="facebook messenger icon" />
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
};

export default Message;
