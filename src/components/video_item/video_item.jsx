import React from "react";

const VideoItem = (props) => {
  return <li className="video">{props.video.snippet.title}</li>;
};

export default VideoItem;
