import React from "react";
import {
  FiMic,
  FiMicOff,
  FiVideo,
  FiVideoOff,
  FiMonitor,
  FiMessageSquare,
  FiUsers,
  FiPhoneOff,
} from "react-icons/fi";

const MeetingControl = ({
  micOn,
  setMicOn,
  cameraOn,
  setCameraOn,
}) => {
  return (
    <footer className="bg-gray-800 h-20 flex justify-center items-center gap-5">

      <button
        onClick={() => setMicOn(!micOn)}
        className={`p-4 rounded-full ${
          micOn ? "bg-gray-700" : "bg-red-600"
        }`}
      >
        {micOn ? <FiMic size={22} /> : <FiMicOff size={22} />}
      </button>

      <button
        onClick={() => setCameraOn(!cameraOn)}
        className={`p-4 rounded-full ${
          cameraOn ? "bg-gray-700" : "bg-red-600"
        }`}
      >
        {cameraOn ? <FiVideo size={22} /> : <FiVideoOff size={22} />}
      </button>

      <button className="bg-gray-700 p-4 rounded-full">
        <FiMonitor size={22} />
      </button>

      <button className="bg-gray-700 p-4 rounded-full">
        <FiMessageSquare size={22} />
      </button>

      <button className="bg-gray-700 p-4 rounded-full">
        <FiUsers size={22} />
      </button>

      <button className="bg-red-600 p-4 rounded-full">
        <FiPhoneOff size={22} />
      </button>

    </footer>
  );
};

export default MeetingControl;