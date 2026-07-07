import React, { useEffect, useRef } from "react";

const VideoCard = ({ name, cameraOn }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;

    const startCamera = async () => {
      if (!cameraOn) {
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
        return;
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera Error:", error);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraOn]);

  return (
    <div className="relative bg-black rounded-xl overflow-hidden h-full min-h-87.5">
      {cameraOn ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white text-2xl">
          Camera Off
        </div>
      )}

      <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded text-white">
        {name}
      </div>
    </div>
  );
};

export default VideoCard;