import React, { useState } from "react";
import { useParams } from "react-router-dom";

import MeetingHeader from "../../Components/MeetingRoom/MeetingHeader";
import VideoGrid from "../../Components/MeetingRoom/VideoGrid";
import MeetingControl from "../../Components/MeetingRoom/MeetingControl";
import RightSidebar from "../../Components/MeetingRoom/RightSidebar";

const MeetingRoom = () => {
  const { meetingId } = useParams();

  // Mic & Camera
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  // Streams
  const [cameraStream, setCameraStream] = useState(null);
  const [screenStream, setScreenStream] = useState(null);

  // Sidebar
  const [activePanel, setActivePanel] = useState(null);

  return (
    <div className="h-screen flex flex-col bg-[#0B1120]">

      {/* Header */}
      <MeetingHeader meetingId={meetingId} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Video Area */}
        <div className="flex-1 pb-28">
          <VideoGrid
            cameraOn={cameraOn}
            cameraStream={cameraStream}
            screenStream={screenStream}
          />
        </div>

        {/* Right Sidebar */}
        {activePanel && (
          <RightSidebar
            activePanel={activePanel}
            setActivePanel={setActivePanel}
          />
        )}

      </div>

      {/* Bottom Controls */}
      <MeetingControl
        micOn={micOn}
        setMicOn={setMicOn}
        cameraOn={cameraOn}
        setCameraOn={setCameraOn}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        cameraStream={cameraStream}
        setCameraStream={setCameraStream}
        screenStream={screenStream}
        setScreenStream={setScreenStream}
      />

    </div>
  );
};

export default MeetingRoom;