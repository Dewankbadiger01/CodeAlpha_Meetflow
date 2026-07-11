import React from "react";
import { FiX } from "react-icons/fi";

const MeetingSettings = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="w-125 bg-[#1E1F23] rounded-2xl shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 px-6 py-4">
          <h2 className="text-2xl font-semibold text-white">
            Meeting Settings
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          <div>
            <label className="text-gray-300 block mb-2">
              Microphone
            </label>

            <select className="w-full bg-[#2B2D31] text-white p-3 rounded-lg outline-none">
              <option>Default Microphone</option>
            </select>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Camera
            </label>

            <select className="w-full bg-[#2B2D31] text-white p-3 rounded-lg outline-none">
              <option>Default Camera</option>
            </select>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Speaker
            </label>

            <select className="w-full bg-[#2B2D31] text-white p-3 rounded-lg outline-none">
              <option>Default Speaker</option>
            </select>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Video Quality
            </label>

            <select className="w-full bg-[#2B2D31] text-white p-3 rounded-lg outline-none">
              <option>720p HD</option>
              <option>480p</option>
              <option>360p</option>
            </select>
          </div>

        </div>

      </div>

    </div>
  );
};

export default MeetingSettings;