import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Notification = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          <i class="bell outline icon" />
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
};

export default Notification;
