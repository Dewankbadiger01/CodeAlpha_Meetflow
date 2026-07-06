import React from "react";

const MeetingHeader = ({ meetingId }) => {
  return (
    <header className="h-16 bg-gray-800 flex items-center justify-between px-6 text-white">
      <h1 className="text-2xl font-bold">
        MeetFlow
      </h1>

      <div className="text-gray-300">
        Meeting ID:
        <span className="ml-2 text-blue-400 font-semibold">
          {meetingId}
        </span>
      </div>
    </header>
  );
};

export default MeetingHeader;