import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ChatPanel = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Alex",
      text: "Welcome to the meeting 👋",
    },
    {
      sender: "You",
      text: "Hello everyone!",
    },
  ]);

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "You",
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="h-full flex flex-col">

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "You"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-xl ${
                msg.sender === "You"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              <h4 className="font-semibold text-sm mb-1">
                {msg.sender}
              </h4>

              <p>{msg.text}</p>
            </div>
          </div>
        ))}

      </div>

      {/* Input */}
      <div className="border-t border-gray-700 pt-4 mt-4 flex gap-3">

        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg"
        >
          <FiSend size={20} />
        </button>

      </div>

    </div>
  );
};

export default ChatPanel;