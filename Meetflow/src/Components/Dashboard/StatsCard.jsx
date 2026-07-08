import React from "react";
import {
  FiCalendar,
  FiClock,
  FiVideo,
  FiUsers,
} from "react-icons/fi";

const StatsCards = () => {
  const meetings =
    JSON.parse(localStorage.getItem("meetings")) || [];

  const today = new Date().toISOString().split("T")[0];

  const todayMeetings = meetings.filter(
    (meeting) => meeting.date === today
  ).length;

  const upcomingMeetings = meetings.filter(
    (meeting) => meeting.date > today
  ).length;

  const instantMeetings = meetings.filter(
    (meeting) => meeting.type === "Instant"
  ).length;

  const totalMeetings = meetings.length;

  const stats = [
    {
      title: "Total Meetings",
      value: totalMeetings,
      icon: <FiVideo size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Today's Meetings",
      value: todayMeetings,
      icon: <FiCalendar size={28} />,
      color: "bg-green-600",
    },
    {
      title: "Upcoming",
      value: upcomingMeetings,
      icon: <FiClock size={28} />,
      color: "bg-purple-600",
    },
    {
      title: "Instant Meetings",
      value: instantMeetings,
      icon: <FiUsers size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`${item.color} text-white p-4 rounded-xl`}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;