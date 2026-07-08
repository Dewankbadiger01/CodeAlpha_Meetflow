import React from "react";
import {
  FiWifi,
  FiClock,
  FiShield,
} from "react-icons/fi";

const MeetingHeader = ({ meetingId }) => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="h-16 bg-[#202124] border-b border-gray-700 px-6 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
          M
        </div>

        <div>
          <h1 className="text-white text-xl font-bold">
            MeetFlow
          </h1>

          <p className="text-xs text-gray-400">
            Team Meeting
          </p>
        </div>

      </div>

      {/* Center */}
      <div className="hidden md:flex items-center gap-8">

        <div className="flex items-center gap-2 text-gray-300">
          <FiShield className="text-green-400" />
          <span>Secure Meeting</span>
        </div>

        <div className="text-gray-300">
          ID :
          <span className="text-blue-400 ml-2 font-semibold">
            {meetingId}
          </span>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2 text-green-400">
          <FiWifi />
          <span className="text-sm">Connected</span>
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <FiClock />
          <span>{time}</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
          D
        </div>

      </div>

    </header>
  );
};

export default MeetingHeader;