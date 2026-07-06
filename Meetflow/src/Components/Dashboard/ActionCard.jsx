import React from "react";
import { FiPlus, FiVideo } from "react-icons/fi";

const ActionCard = ({ onCreate, onJoin }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {/* Create Meeting */}
      <div
        onClick={onCreate}
        className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg cursor-pointer hover:scale-105 transition"
      >
        <FiPlus size={35} />

        <h2 className="text-2xl font-bold mt-5">
          New Meeting
        </h2>

        <p className="mt-2">
          Start an instant video meeting.
        </p>
      </div>

      {/* Join Meeting */}
      <div
        onClick={onJoin}
        className="bg-white rounded-2xl p-8 shadow-lg cursor-pointer hover:scale-105 transition"
      >
        <FiVideo
          className="text-blue-600"
          size={35}
        />

        <h2 className="text-2xl font-bold mt-5">
          Join Meeting
        </h2>

        <p className="text-gray-500 mt-2">
          Join using a meeting code.
        </p>
      </div>
    </div>
  );
};

export default ActionCard;