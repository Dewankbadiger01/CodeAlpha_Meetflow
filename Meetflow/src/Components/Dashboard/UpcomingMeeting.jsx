import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiCalendar,
  FiClock,
  FiVideo,
  FiTrash2,
} from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";

const UpcomingMeeting = () => {
  const navigate = useNavigate();

  const meetings =
    JSON.parse(localStorage.getItem("meetings")) || [];

  const today = new Date().toISOString().split("T")[0];

  const upcomingMeetings = meetings.filter(
    (meeting) => meeting.date >= today
  );

  const deleteMeeting = (id) => {
    const updatedMeetings = meetings.filter(
      (meeting) => meeting.id !== id
    );

    localStorage.setItem(
      "meetings",
      JSON.stringify(updatedMeetings)
    );

    window.location.reload();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Upcoming Meetings
      </h2>

      {upcomingMeetings.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No upcoming meetings
        </div>
      ) : (
        <div className="space-y-5">

          {upcomingMeetings.map((meeting) => (
            <div
              key={meeting.id}
              className="border rounded-xl p-5 flex justify-between items-center hover:shadow-md transition"
            >

              <div>

                <h3 className="text-xl font-semibold">
                  {meeting.title}
                </h3>

                <div className="flex gap-6 mt-3 text-gray-600">

                  <div className="flex items-center gap-2">
                    <FiCalendar />
                    {meeting.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <FiClock />
                    {meeting.time}
                  </div>

                  <div className="flex items-center gap-2">
                    <FiVideo />
                    {meeting.type}
                  </div>

                </div>

                {meeting.description && (
                  <p className="mt-3 text-gray-500">
                    {meeting.description}
                  </p>
                )}

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() =>
                    navigate(`/meeting/${meeting.id}`)
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                >
                  Join
                </button>

                <button
                  onClick={() => deleteMeeting(meeting.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg"
                >
                  <FiTrash2 />
                </button>
<button
  className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-lg"
>
  <FiEdit2 />
</button>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default UpcomingMeeting;