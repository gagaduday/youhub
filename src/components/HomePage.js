import React from "react";
import { Helmet } from "react-helmet";
import VideoItem from "./VideoItem";
import { fetchPopular } from "../actions";
import { connect } from "react-redux";
import "./index.css";

class VideoList extends React.Component {
  componentDidMount() {
    this.props.fetchPopular();
  }
  renderedList = () => {
    if (!this.props.popular) return null;
    return this.props.popular.map((video, index) => {
      return (
        <div key={index} className="three wide column">
          <VideoItem video={video} isFromHome={true} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="homepage ui grid">
        <Helmet>
          <title>YouHub</title>
        </Helmet>
        {this.renderedList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    popular: state.popular
  };
};

export default connect(
  mapStateToProps,
  { fetchPopular }
)(VideoList);
