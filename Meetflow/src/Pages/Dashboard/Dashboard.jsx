import React from "react";
import {
  FiHome,
  FiCalendar,
  FiClock,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiVideo,
  FiPlus,
} from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";

const Dashboard = () => {
  return (
    
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">

        <h1 className="text-3xl font-bold text-blue-600 mb-10">
          MeetFlow
        </h1>

        <nav className="space-y-5">

          <button className="flex items-center gap-3 text-blue-600 font-semibold">
            <FiHome />
            Dashboard
          </button>

          <button className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
            <FiVideo />
            Meetings
          </button>

          <button className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
            <FiCalendar />
            Schedule
          </button>

          <button className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
            <FiClock />
            History
          </button>

          <button className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
            <FiUsers />
            Contacts
          </button>

          <button className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
            <FiSettings />
            Settings
          </button>

        </nav>

        <button className="mt-16 flex items-center gap-3 text-red-500 hover:text-red-700">
          <FiLogOut />
          Logout
        </button>

      </aside>

      <main className="flex-1 p-8">

        {/* Header */}
     <header className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-8">

  <div>
    <h1 className="text-2xl font-bold text-gray-800">
      Dashboard
    </h1>
    <p className="text-gray-500">
      Welcome back, Dewank 👋
    </p>
  </div>

  <div className="flex items-center gap-4">

    <input
      type="text"
      placeholder="Search meetings..."
      className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button className="text-2xl"><MdNotificationsNone />
</button>

    <img
      src="https://ui-avatars.com/api/?name=Dewank"
      alt="Profile"
      className="w-10 h-10 rounded-full"
    />

  </div>

</header>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg cursor-pointer hover:scale-105 transition">

            <FiPlus size={35} />

            <h2 className="text-2xl font-bold mt-5">
              New Meeting
            </h2>

            <p className="mt-2">
              Start an instant video meeting.
            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg cursor-pointer hover:scale-105 transition">

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

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Meetings</h3>
            <h1 className="text-4xl font-bold mt-3">0</h1>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Hours</h3>
            <h1 className="text-4xl font-bold mt-3">0h</h1>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Participants</h3>
            <h1 className="text-4xl font-bold mt-3">0</h1>
          </div>

        </div>
        {/*Recent transaction */}
        <div className="mt=10">
          <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">Recent Meetings</h2>
    <button className="text-blue-600 font-medium hover:underline">
  View All
</button>
          </div>
  <div className="bg-white rounded-2xl shadow overflow-hidden">
              <table className="w-full">

      <thead className="bg-gray-100">
        <tr>
          <th className="text-left px-6 py-4">Meeting</th>
          <th className="text-left px-6 py-4">Date</th>
          <th className="text-left px-6 py-4">Duration</th>
          <th className="text-left px-6 py-4">Status</th>
          <th className="text-left px-6 py-4">Action</th>
        </tr>
      </thead>

      <tbody>

        <tr className="border-t">
          <td className="px-6 py-4">Team Standup</td>
          <td className="px-6 py-4">Today</td>
          <td className="px-6 py-4">30 min</td>
          <td className="px-6 py-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Completed
            </span>
          </td>
          <td className="px-6 py-4">
            <button className="text-blue-600 hover:underline">
              View
            </button>
          </td>
        </tr>

        <tr className="border-t">
          <td className="px-6 py-4">Client Meeting</td>
          <td className="px-6 py-4">Yesterday</td>
          <td className="px-6 py-4">1 Hour</td>
          <td className="px-6 py-4">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              Scheduled
            </span>
          </td>
          <td className="px-6 py-4">
            <button className="text-blue-600 hover:underline">
              Join
            </button>
          </td>
        </tr>

        <tr className="border-t">
          <td className="px-6 py-4">Project Review</td>
          <td className="px-6 py-4">Monday</td>
          <td className="px-6 py-4">45 min</td>
          <td className="px-6 py-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Upcoming
            </span>
          </td>
          <td className="px-6 py-4">
            <button className="text-blue-600 hover:underline">
              Join
            </button>
          </td>
        </tr>

      </tbody>

    </table>

          </div>
          </div>
{/* Upcoming Meetings */}
<div className="mt-10">
  <h2 className="text-2xl font-bold mb-5">Upcoming Meetings</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Meeting Card 1 */}
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <p className="text-sm text-gray-500">Today • 10:00 AM</p>

      <h3 className="text-xl font-semibold mt-2">
        Design Review
      </h3>

      <p className="text-gray-600 mt-2">
        Discuss UI improvements for MeetFlow dashboard.
      </p>

      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">
          👥 5 Participants
        </span>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Join
        </button>
      </div>
    </div>

    {/* Meeting Card 2 */}
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <p className="text-sm text-gray-500">Today • 2:30 PM</p>

      <h3 className="text-xl font-semibold mt-2">
        Team Standup
      </h3>

      <p className="text-gray-600 mt-2">
        Daily sync with the development team.
      </p>

      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">
          👥 8 Participants
        </span>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Join
        </button>
      </div>
    </div>

    {/* Meeting Card 3 */}
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <p className="text-sm text-gray-500">Tomorrow • 11:00 AM</p>

      <h3 className="text-xl font-semibold mt-2">
        Client Presentation
      </h3>

      <p className="text-gray-600 mt-2">
        Present the latest project progress to the client.
      </p>

      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">
          👥 12 Participants
        </span>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Join
        </button>
      </div>
    </div>

  </div>
</div>
      </main>

    </div>
  );
};

export default Dashboard;