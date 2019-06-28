import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

const VideoItem = props => {
  if (!props.video) return null;
  let title = props.video.snippet.title;
  let channelTitle = props.video.snippet.channelTitle;

  const id = props.isFromHome ? props.video.id : props.video.id.videoId;
  const name = props.isFromHome
    ? title.length > 64
      ? title.slice(0, 63) + "..."
      : title
    : title.length > 32
    ? title.slice(0, 31) + "..."
    : title;
  return (
    <div
      className={`${props.isFromHome ? "video-item-main" : "video-item"} item`}
    >
      <Link to={`/selected/${id}`}>
        <img
          alt={props.video.snippet.title}
          className="ui image"
          src={props.video.snippet.thumbnails.medium.url}
        />
      </Link>
      <div className="content">
        <div className="item-content-title">{name}</div>
        <div className="item-content-channel">{channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
