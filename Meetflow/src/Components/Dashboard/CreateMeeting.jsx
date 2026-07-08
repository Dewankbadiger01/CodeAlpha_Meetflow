import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateMeeting = ({ onClose, editMeeting }) => {
const [meetingTitle, setMeetingTitle] = useState(
  editMeeting?.title || ""
);

const [meetingDate, setMeetingDate] = useState(
  editMeeting?.date || ""
);

const [meetingTime, setMeetingTime] = useState(
  editMeeting?.time || ""
);

const [meetingType, setMeetingType] = useState(
  editMeeting?.type || "Instant"
);

const [description, setDescription] = useState(
  editMeeting?.description || ""
);
const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();

  const meetings =
    JSON.parse(localStorage.getItem("meetings")) || [];

  if (editMeeting) {
    const updatedMeetings = meetings.map((meeting) =>
      meeting.id === editMeeting.id
        ? {
            ...meeting,
            title: meetingTitle,
            date: meetingDate,
            time: meetingTime,
            type: meetingType,
            description,
          }
        : meeting
    );

    localStorage.setItem(
      "meetings",
      JSON.stringify(updatedMeetings)
    );

    alert("Meeting Updated Successfully!");
  } else {
    const newMeeting = {
      id: Date.now().toString(),
      title: meetingTitle,
      date: meetingDate,
      time: meetingTime,
      type: meetingType,
      description,
    };

    meetings.push(newMeeting);

    localStorage.setItem(
      "meetings",
      JSON.stringify(meetings)
    );

    alert("Meeting Created Successfully!");
  }

  onClose();
};
  return (
<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Create Meeting
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Meeting Title"
            value={meetingTitle}
            onChange={(e) => setMeetingTitle(e.target.value)}
            required
            className="w-full border rounded-lg p-3"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="date"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
              required
              className="border rounded-lg p-3"
            />

            <input
              type="time"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              required
              className="border rounded-lg p-3"
            />

          </div>

          <select
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option>Instant</option>
            <option>Scheduled</option>
          </select>

          <textarea
            rows="4"
            placeholder="Description (Optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg p-3 resize-none"
          />

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Create Meeting
            </button>

          </div>

        </form>

      </div>

    </div>  )
}

export default CreateMeeting
