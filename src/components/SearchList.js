import React from "react";
import VideoItem from "./VideoItem";
import youtube from "../apis/youtube";

class SearchList extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const renderedList = this.state.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={this.onVideoSelect}
          video={video}
        />
      );
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

export default SearchList;
