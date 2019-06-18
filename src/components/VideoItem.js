import "./index.css";
import React from "react";
import { connect } from "react-redux";
import { selectVideo } from "../actions";

const VideoItem = props => {
  if (!props.video) return null;
  let title = props.video.snippet.title;
  let channelTitle = props.video.snippet.channelTitle;
  return (
    <div
      onClick={() => props.selectVideo(props.video)}
      className="video-item item"
    >
      <img
        alt={props.video.snippet.title}
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="item-content-title">
          {title.length > 32 ? title.slice(0, 31) + "..." : title}
        </div>
        <div className="item-content-channel">{channelTitle}</div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { selectVideo }
)(VideoItem);
