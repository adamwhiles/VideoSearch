import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    var videoDate = new Date(video.snippet.publishedAt);
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>

        <div className="ui segment">
          <div className="ui label">
            {videoDate.getMonth() +
              1 +
              "/" +
              videoDate.getDate() +
              "/" +
              videoDate.getFullYear()}
          </div>
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
