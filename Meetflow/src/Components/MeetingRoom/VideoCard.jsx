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
  cameraStream,
  screenStream,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (screenStream) {
      videoRef.current.srcObject = screenStream;
    } else if (cameraStream) {
      videoRef.current.srcObject = cameraStream;
    } else {
      videoRef.current.srcObject = null;
    }
  }, [screenStream, cameraStream]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-gray-700 bg-[#1e1f22] shadow-xl ${
        large ? "h-full" : "h-80"
      }`}
    >
      {/* Screen Share or Camera */}
      {screenStream || cameraStream ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      ) : cameraOn ? (
        <div className="w-full h-full bg-linear-to-br from-slate-800 via-slate-900 to-black flex flex-col items-center justify-center">

          <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
            {name.charAt(0)}
          </div>

          <h2 className="text-white text-xl font-semibold mt-5">
            {name}
          </h2>

          <span className="mt-3 bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm">
            Camera Ready
          </span>

        </div>
      ) : (
        <div className="w-full h-full bg-[#2b2d31] flex flex-col items-center justify-center">

          <div className="w-28 h-28 rounded-full bg-gray-600 flex items-center justify-center text-5xl font-bold text-white">
            {name.charAt(0)}
          </div>

          <h2 className="text-white text-xl font-semibold mt-5">
            {name}
          </h2>

          <p className="text-gray-400 mt-2">
            Camera is Off
          </p>

        </div>
      )}

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md px-5 py-4 flex items-center justify-between">

        <div>
          <h3 className="text-white font-semibold">
            {name}
          </h3>
        </div>

        <div className="flex gap-3">

          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              micOn ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {micOn ? (
              <FiMic className="text-white text-lg" />
            ) : (
              <FiMicOff className="text-white text-lg" />
            )}
          </div>

          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              cameraOn ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {cameraOn ? (
              <FiVideo className="text-white text-lg" />
            ) : (
              <FiVideoOff className="text-white text-lg" />
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default VideoCard;