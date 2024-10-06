import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  return (
    <div className="w-60 font-sans text-center m-2 cursor-pointer hover:opacity-80">
      <img className="rounded-md" src={snippet?.thumbnails?.medium?.url} />
      <h1 className="font-semibold">{snippet?.title}</h1>
      <span className="text-gray-800">{snippet?.channelTitle}</span>
    </div>
  );
};

export default VideoCard;
