import React, { useState } from "react";
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
const SideBar = () => {
  return (
 <div >

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
      </div>
  )
}

export default SideBar
