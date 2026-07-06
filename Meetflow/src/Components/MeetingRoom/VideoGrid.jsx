import React from "react";
import VideoCard from "./VideoCard";

const VideoGrid = ({ cameraOn }) => {
  return (
    <div className="grid grid-cols-2 gap-6 h-full p-6">
      <VideoCard
        name="You"
        cameraOn={cameraOn}
      />

      <VideoCard
        name="Waiting for participant..."
        cameraOn={false}
      />
    </div>
  );
};

export default VideoGrid;