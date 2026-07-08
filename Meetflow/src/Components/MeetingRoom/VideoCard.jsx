import React, { useEffect, useRef } from "react";
import {
  FiMic,
  FiMicOff,
  FiVideo,
  FiVideoOff,
} from "react-icons/fi";

const VideoCard = ({
  name,
  cameraOn,
  micOn = true,
  large = false,
  screenStream,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (screenStream && videoRef.current) {
      videoRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#1e1f22] border border-gray-700 ${
        large ? "h-full" : "h-72"
      }`}
    >
      {/* Screen Share */}
      {screenStream ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      ) : cameraOn ? (
        /* Camera Placeholder */
        <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-5xl text-white font-bold shadow-lg">
            {name.charAt(0)}
          </div>
        </div>
      ) : (
        /* Camera Off */
        <div className="w-full h-full bg-[#2b2d31] flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gray-600 flex items-center justify-center text-5xl text-white font-bold">
            {name.charAt(0)}
          </div>
        </div>
      )}

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md px-4 py-3 flex justify-between items-center">

        <span className="text-white font-semibold">
          {name}
        </span>

        <div className="flex gap-2">

          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              micOn ? "bg-gray-700" : "bg-red-600"
            }`}
          >
            {micOn ? (
              <FiMic color="white" />
            ) : (
              <FiMicOff color="white" />
            )}
          </div>

          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              cameraOn ? "bg-gray-700" : "bg-red-600"
            }`}
          >
            {cameraOn ? (
              <FiVideo color="white" />
            ) : (
              <FiVideoOff color="white" />
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default VideoCard;