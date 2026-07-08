import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiVideo, FiArrowRight } from "react-icons/fi";

const JoinMeeting = ({ onClose }) => {
  const [meetingId, setMeetingId] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (!meetingId.trim()) {
      alert("Please enter a Meeting ID");
      return;
    }

    navigate(`/meeting/${meetingId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="w-full max-w-md bg-[#202124] rounded-2xl shadow-2xl p-8">

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
            <FiVideo className="text-white text-3xl" />
          </div>
        </div>

        <h2 className="text-3xl text-white font-bold text-center">
          Join Meeting
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Enter your meeting code to continue.
        </p>

        <input
          type="text"
          placeholder="Meeting ID"
          value={meetingId}
          onChange={(e) => setMeetingId(e.target.value)}
          className="w-full mt-8 bg-[#2d2f34] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <div className="flex gap-3 mt-8">

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={handleJoin}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
          >
            Join
            <FiArrowRight />
          </button>

        </div>

      </div>

    </div>
  );
};

export default JoinMeeting;