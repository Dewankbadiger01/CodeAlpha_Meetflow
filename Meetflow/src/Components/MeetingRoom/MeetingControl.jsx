import React from "react";
import {
  FiMic,
  FiMicOff,
  FiVideo,
  FiVideoOff,
  FiMonitor,
  FiMessageSquare,
  FiUsers,
  FiGrid,
  FiPhoneOff,
} from "react-icons/fi";

const MeetingControl = ({
  micOn,
  setMicOn,
  cameraOn,
  setCameraOn,

  activePanel,
  setActivePanel,

  cameraStream,
  setCameraStream,

  screenStream,
  setScreenStream,
}) => {

  const togglePanel = (panel) => {
    if (activePanel === panel) {
      setActivePanel(null);
    } else {
      setActivePanel(panel);
    }
  };

  // Camera
  const toggleCamera = async () => {
    if (cameraOn) {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
        setCameraStream(null);
      }
      setCameraOn(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        setCameraStream(stream);
        setCameraOn(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Screen Share
  const shareScreen = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      setScreenStream(stream);

      stream.getVideoTracks()[0].onended = () => {
        setScreenStream(null);
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">

      <div className="bg-[#2d2f34] rounded-full px-6 py-4 flex items-center gap-4 shadow-2xl">

        {/* Mic */}
        <button
          onClick={() => setMicOn(!micOn)}
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            micOn ? "bg-slate-600" : "bg-red-600"
          }`}
        >
          {micOn ? (
            <FiMic size={24} color="white" />
          ) : (
            <FiMicOff size={24} color="white" />
          )}
        </button>

        {/* Camera */}
        <button
          onClick={toggleCamera}
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            cameraOn ? "bg-slate-600" : "bg-red-600"
          }`}
        >
          {cameraOn ? (
            <FiVideo size={24} color="white" />
          ) : (
            <FiVideoOff size={24} color="white" />
          )}
        </button>

        <div className="h-10 border-l border-gray-500" />

        {/* Screen Share */}
        <button
          onClick={shareScreen}
          className="w-14 h-14 rounded-full bg-slate-600 hover:bg-blue-600 flex items-center justify-center"
        >
          <FiMonitor size={24} color="white" />
        </button>

        {/* Chat */}
        <button
          onClick={() => togglePanel("chat")}
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            activePanel === "chat"
              ? "bg-blue-600"
              : "bg-slate-600"
          }`}
        >
          <FiMessageSquare size={24} color="white" />
        </button>

        {/* Participants */}
        <button
          onClick={() => togglePanel("participants")}
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            activePanel === "participants"
              ? "bg-blue-600"
              : "bg-slate-600"
          }`}
        >
          <FiUsers size={24} color="white" />
        </button>

        {/* Whiteboard */}
        <button
          onClick={() => togglePanel("whiteboard")}
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            activePanel === "whiteboard"
              ? "bg-blue-600"
              : "bg-slate-600"
          }`}
        >
          <FiGrid size={24} color="white" />
        </button>

        <div className="h-10 border-l border-gray-500" />

        {/* End Call */}
        <button
          className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center"
        >
          <FiPhoneOff size={24} color="white" />
        </button>

      </div>
    </div>
  );
};

export default MeetingControl;