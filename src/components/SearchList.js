import React from "react";
import VideoItem from "./VideoItem";
import { connect } from "react-redux";
import { fetchVideos } from "../actions";

class SearchList extends React.Component {
  componentDidMount() {
    this.props.fetchVideos(this.props.match.params.term);
  }

  render() {
    const renderedList = () => {
      if (!this.props.videos) return null;
      return this.props.videos.map((video, index) => {
        return <VideoItem key={index} video={video} />;
      });
    };

    return (
      <div className="ui container relaxed divided list">{renderedList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(
  mapStateToProps,
  { fetchVideos }
)(SearchList);
