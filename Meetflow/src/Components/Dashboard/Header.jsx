import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
const Header = () => {
  return (
    <div>
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
    </div>
  )
}

export default Header
