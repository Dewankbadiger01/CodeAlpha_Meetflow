import React from 'react'
import { FiPhoneOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const LeaveMeetingModal = ({ onClose }) => {
  const navigate = useNavigate();

  const leaveMeeting = () => {
    navigate("/dashboard");
  };  return (
    <div className='fixed insert-0 bg-black/60 flex justify-center items-center z-50'>
      <div className='bg-[#1E1F23] w-125  rounded-2xl shadow-2xl p-8'>
        <div className='w-20 h-20 rounded-full bg-red-600 flex items-center justify-center'>
            <FiPhoneOff size={38} color="white" />

        </div>
      </div>
              <h2 className="text-2xl text-white font-bold text-center">
          Leave Meeting?
        </h2>

        <p className="text-gray-400 text-center mt-3">
          Are you sure you want to leave this meeting?
        </p>

    </div>
  )
}

export default LeaveMeetingModal
