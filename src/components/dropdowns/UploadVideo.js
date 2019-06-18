import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const UploadVideo = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          <i class="plus square outline icon" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Upload Video</Dropdown.Item>
          <Dropdown.Item href="#">Go Live</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UploadVideo;
