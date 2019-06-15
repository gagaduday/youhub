import React from "react";
import VideoRelated from "./VideoRelated";
import VideoDetail from "./VideoDetail";

class VideoSelected extends React.Component {
  render() {
    return (
      <div className="video_selected ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail />
            </div>
            <div className="five wide column">
              <VideoRelated />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoSelected;
