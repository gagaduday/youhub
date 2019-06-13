import "./index.css";
import React from "react";
import { connect } from "react-redux";
import { selectVideo } from "../actions";

const VideoItem = props => {
  console.log(props.video.snippet);
  if (!props.video) return null;
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
        <div className="header">{props.video.snippet.title}</div>
        <div>{props.video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { selectVideo }
)(VideoItem);
