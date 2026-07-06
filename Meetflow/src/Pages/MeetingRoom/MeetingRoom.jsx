import React, { useState } from "react";
import { useParams } from "react-router-dom";

import MeetingHeader from "../../Components/MeetingRoom/MeetingHeader";
import VideoGrid from "../../Components/MeetingRoom/VideoGrid";
import MeetingControl from "../../Components/MeetingRoom/MeetingControl";

const MeetingRoom = () => {
  const { meetingId } = useParams();

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <div className="h-screen flex flex-col bg-gray-900">

      <MeetingHeader meetingId={meetingId} />

      <div className="flex-1">
        <VideoGrid cameraOn={cameraOn} />
      </div>

      <MeetingControl
        micOn={micOn}
        setMicOn={setMicOn}
        cameraOn={cameraOn}
        setCameraOn={setCameraOn}
      />

    </div>
  );
};

export default MeetingRoom;