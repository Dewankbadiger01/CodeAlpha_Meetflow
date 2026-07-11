import React from "react";
import { FiCopy } from "react-icons/fi";

const MeetingHeader = ({ meetingId, seconds }) => {

  const formatTime = (sec) => {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const secs = String(sec % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  const copyMeetingId = () => {
    navigator.clipboard.writeText(meetingId);
    alert("Meeting ID Copied");
  };

  return (
    <header className="h-16 bg-[#1E1F23] border-b border-gray-700 flex justify-between items-center px-6">

      <h1 className="text-2xl font-bold text-white">
        MeetFlow
      </h1>

      <div className="flex items-center gap-6">

        <div className="bg-[#2A2B30] px-4 py-2 rounded-lg text-green-400 font-semibold">
          ⏱ {formatTime(seconds)}
        </div>

        <div className="bg-[#2A2B30] px-4 py-2 rounded-lg flex items-center gap-3">

          <span className="text-white">
            {meetingId}
          </span>

          <button
            onClick={copyMeetingId}
            className="text-blue-400 hover:text-blue-300"
          >
            <FiCopy size={20} />
          </button>

        </div>

      </div>

    </header>
  );
};

export default MeetingHeader;