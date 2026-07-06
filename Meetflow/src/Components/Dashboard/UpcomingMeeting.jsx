import React from "react";
import MeetingCard from "./MeetingCard";

const UpcomingMeeting = () => {
  const meetings = [
    {
      id: 1,
      title: "Design Review",
      date: "Today • 10:00 AM",
      description: "Discuss UI improvements for MeetFlow dashboard.",
      participants: 5,
    },
    {
      id: 2,
      title: "Team Standup",
      date: "Today • 2:30 PM",
      description: "Daily sync with the development team.",
      participants: 8,
    },
    {
      id: 3,
      title: "Client Presentation",
      date: "Tomorrow • 11:00 AM",
      description: "Present the latest project progress to the client.",
      participants: 12,
    },
  ];

  const handleJoin = (meeting) => {
    console.log("Joining:", meeting.title);
    // Navigate to meeting room or open join modal
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5">
        Upcoming Meetings
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            title={meeting.title}
            date={meeting.date}
            description={meeting.description}
            participants={meeting.participants}
            onJoin={() => handleJoin(meeting)}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeeting;