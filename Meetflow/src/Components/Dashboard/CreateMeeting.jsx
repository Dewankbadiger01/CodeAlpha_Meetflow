import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateMeeting = ({ onClose }) => {
      const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingType, setMeetingType] = useState("Instant");
  const [description, setDescription] = useState("");
const navigate = useNavigate();
 const handleSubmit = (e) => {
  e.preventDefault();

  const meetingId = Math.random()
    .toString(36)
    .substring(2, 10)
    .toUpperCase();

  const meetingData = {
    meetingId,
    meetingTitle,
    meetingDate,
    meetingTime,
    meetingType,
    description,
  };

  console.log(meetingData);

  // Save temporarily in localStorage
  localStorage.setItem("meeting", JSON.stringify(meetingData));

  // Close modal
  onClose();

  // Open meeting room
  navigate(`/meeting/${meetingId}`);
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
