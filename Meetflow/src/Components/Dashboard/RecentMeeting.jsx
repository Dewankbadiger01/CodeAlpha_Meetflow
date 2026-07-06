import React from 'react'

const RecentMeeting = () => {
  return (
    <div>
              <div className="mt-10">
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
    </div>
  )
}

export default RecentMeeting
