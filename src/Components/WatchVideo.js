import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const youtubeId = searchParams.get("v");

  return (
    <div>
      <iframe
        width="760"
        height="415"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default WatchVideo;
