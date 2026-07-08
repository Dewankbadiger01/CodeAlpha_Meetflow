import React, { useRef, useEffect, useState } from "react";

const Whiteboard = () => {
  const canvasRef = useRef(null);

  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = 700;
    canvas.height = 500;

    const ctx = canvas.getContext("2d");

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#2563eb";
  }, []);

  const startDrawing = (e) => {
    const ctx = canvasRef.current.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;

    const ctx = canvasRef.current.getContext("2d");

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">

      <div className="bg-gray-100 p-3 flex justify-between items-center">

        <h2 className="font-semibold text-lg">
          Whiteboard
        </h2>

        <button
          onClick={clearBoard}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Clear
        </button>

      </div>

      <canvas
        ref={canvasRef}
        className="w-full cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />

    </div>
  );
};

export default Whiteboard;