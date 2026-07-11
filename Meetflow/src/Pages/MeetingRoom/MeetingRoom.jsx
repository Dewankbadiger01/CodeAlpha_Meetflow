import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MeetingHeader from "../../Components/MeetingRoom/MeetingHeader";
import VideoGrid from "../../Components/MeetingRoom/VideoGrid";
import MeetingControl from "../../Components/MeetingRoom/MeetingControl";
import RightSidebar from "../../Components/MeetingRoom/RightSidebar";
import MeetingSettings from "../../Components/MeetingRoom/MeetingSetting";
import LeaveMeetingModal from "../../Components/MeetingRoom/LeaveMeetingModal";
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
const [seconds, setSeconds] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);
const [handRaised, setHandRaised] = useState(false);
const [showSettings, setShowSettings] = useState(false);
const [showLeaveModal, setShowLeaveModal] = useState(false);
  return (
    <div className="h-screen flex flex-col bg-[#0B1120]">

      {/* Header */}
     <MeetingHeader
  meetingId={meetingId}
  seconds={seconds}
/>
{handRaised && (
  <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50">
    <div className="bg-yellow-500 text-black px-6 py-3 rounded-full shadow-xl font-semibold animate-bounce">
      ✋ You raised your hand
    </div>
  </div>
)}
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
{showSettings && (
  <MeetingSettings
    onClose={() => setShowSettings(false)}
  />
)}
{showLeaveModal && (
  <LeaveMeetingModal
    onClose={() => setShowLeaveModal(false)}
  />
)}
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
  handRaised={handRaised}
  setHandRaised={setHandRaised}

  showSettings={showSettings}
  setShowSettings={setShowSettings}

  showLeaveModal={showLeaveModal}
  setShowLeaveModal={setShowLeaveModal}
/>

    </div>
  );
};

export default MeetingRoom;