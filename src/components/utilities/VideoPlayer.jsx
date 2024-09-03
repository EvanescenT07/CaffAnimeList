"use client";

import { XCircle } from "@phosphor-icons/react";
import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoID }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "350",
    height: "250",
  };

  const OpenPlayer = () => {
    return (
      <button
        className="fixed bottom-5 right-5 text-color-white"
        onClick={handleVideoPlayer}
      >
        <YoutubeLogo size={48} />
      </button>
    );
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-white float-right"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={videoID}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Error loading video")}
        />
      </div>
    );
  };

  return isOpen ? <Player /> : <OpenPlayer />;
};

export default VideoPlayer;
