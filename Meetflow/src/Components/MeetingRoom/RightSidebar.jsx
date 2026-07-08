import React from "react";
import {
  FiX,
  FiMessageSquare,
  FiUsers,
  FiGrid,
} from "react-icons/fi";

import ChatPanel from "./ChatPanel";
import Participants from "./Participants";
import Whiteboard from "./Whiteboard";

const RightSidebar = ({
  activePanel,
  setActivePanel,
}) => {
  const getTitle = () => {
    switch (activePanel) {
      case "chat":
        return "Meeting Chat";

      case "participants":
        return "Participants";

      case "whiteboard":
        return "Whiteboard";

      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (activePanel) {
      case "chat":
        return <FiMessageSquare size={22} />;

      case "participants":
        return <FiUsers size={22} />;

      case "whiteboard":
        return <FiGrid size={22} />;

      default:
        return null;
    }
  };

  return (
    <div className="w-96 bg-[#1E1F23] border-l border-gray-700 flex flex-col">

      {/* Header */}

      <div className="h-16 px-5 flex items-center justify-between border-b border-gray-700">

        <div className="flex items-center gap-3 text-white">
          {getIcon()}
          <h2 className="text-lg font-semibold">
            {getTitle()}
          </h2>
        </div>

        <button
          onClick={() => setActivePanel(null)}
          className="text-gray-400 hover:text-white"
        >
          <FiX size={24} />
        </button>

      </div>

      {/* Body */}

      <div className="flex-1 overflow-auto p-4">

        {activePanel === "chat" && <ChatPanel />}

        {activePanel === "participants" && (
          <Participants />
        )}

        {activePanel === "whiteboard" && (
          <Whiteboard />
        )}

      </div>

    </div>
  );
};

export default RightSidebar;