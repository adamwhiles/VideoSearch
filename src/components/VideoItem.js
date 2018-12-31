import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const channelLink = `https://www.youtube.com/channel/${
    video.snippet.channelId
  }`;

  var videoDate = new Date(video.snippet.publishedAt);

  return (
    <div className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        onClick={() => onVideoSelect(video)}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div>
          <a href={channelLink}>{video.snippet.channelTitle}</a>
        </div>
        <div className="ui label">
          {videoDate.getMonth() +
            1 +
            "/" +
            videoDate.getDate() +
            "/" +
            videoDate.getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
