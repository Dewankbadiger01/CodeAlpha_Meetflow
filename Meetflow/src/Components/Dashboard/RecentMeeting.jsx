import React from "react";

const RecentMeeting = () => {
  const meetings =
    JSON.parse(localStorage.getItem("meetings")) || [];

  return (
    <div className="bg-white rounded-xl p-6 shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Recent Meetings
      </h2>

      {meetings.length === 0 ? (
        <p className="text-gray-500">
          No meetings created yet.
        </p>
      ) : (
        meetings
          .slice()
          .reverse()
          .map((meeting) => (
            <div
              key={meeting.id}
              className="border rounded-lg p-4 mb-3"
            >
              <h3 className="font-semibold">
                {meeting.title}
              </h3>

              <p>
                {meeting.date} • {meeting.time}
              </p>

              <p className="text-blue-600">
                {meeting.type}
              </p>
            </div>
          ))
      )}
    </div>
  );
};

export default RecentMeeting;