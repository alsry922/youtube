import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  console.log(props);
  return (
    <ul className="video-list">
      {props.videos.map((video) => {
        return <VideoItem key={video.id} video={video}></VideoItem>;
      })}
    </ul>
  );
};
export default VideoList;
