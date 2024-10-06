import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const MainVideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchYoutubeVideos();

  }, []);

  const fetchYoutubeVideos = async () => {
    try {
      const youtubeVideos =
        (await (await fetch(YOUTUBE_VIDEOS_API)).json())?.items || [];
      setVideoData(youtubeVideos);
    } catch (error) {}
  };

  return (
    <div className="m-2 p-2 flex flex-wrap ">
      {videoData.map((videoInfo) => (
        <Link key={videoInfo?.id} to={`/watch?v=${videoInfo?.id}`}>
          <VideoCard info={videoInfo} />
        </Link>
      ))}
    </div>
  );
};

export default MainVideoContainer;
