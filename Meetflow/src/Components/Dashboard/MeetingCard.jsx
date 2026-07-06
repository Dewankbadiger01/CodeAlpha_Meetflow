import React from "react";

const MeetingCard = ({
  title,
  date,
  description,
  participants,
  onJoin,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Date & Time */}
      <p className="text-sm text-gray-500">{date}</p>

      {/* Meeting Title */}
      <h3 className="text-xl font-semibold mt-2 text-gray-800">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-2">
        {description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">
          👥 {participants} Participants
        </span>

        <button
          onClick={onJoin}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default MeetingCard;