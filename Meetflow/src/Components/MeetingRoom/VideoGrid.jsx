import React from "react";
import VideoCard from "./VideoCard";

const VideoGrid = ({
  cameraOn,
  cameraStream,
  screenStream,
}) => {  
  return (
    <div className="grid grid-cols-2 gap-6 h-full p-6">

     <VideoCard
  name="You"
  cameraOn={cameraOn}
  cameraStream={cameraStream}
  screenStream={screenStream}
/>

      <VideoCard
        name="Waiting for Participant"
        cameraOn={false}
      />

    </div>
  );
};

export default VideoGrid;