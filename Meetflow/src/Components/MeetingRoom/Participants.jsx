import React from "react";

const Whiteboard = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 h-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Whiteboard
        </h2>

        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
          Clear
        </button>
      </div>

      <canvas
        className="w-full h-60 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50"
      />
    </div>
  );
};

export default Whiteboard;