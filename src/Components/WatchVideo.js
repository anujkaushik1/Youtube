import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const youtubeId = searchParams.get("v");

  return (
    <div className="w-full">
      <div className="flex w-full h-[415px]">
        <div>
          <iframe
            width="850"
            height="415"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <LiveChat/>
        
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchVideo;
