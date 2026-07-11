import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiEdit,
  FiSave,
} from "react-icons/fi";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    role: "Software Developer",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex justify-center py-10">

      <div className="bg-[#1E1F23] rounded-2xl shadow-xl w-full max-w-3xl p-8">

        <div className="flex flex-col items-center">

          <img
            src="https://ui-avatars.com/api/?name=John+Doe&background=2563eb&color=fff&size=200"
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
            Change Photo
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div>
            <label className="text-gray-400">Full Name</label>

            <div className="relative mt-2">

              <FiUser className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                name="name"
                disabled={!editing}
                value={user.name}
                onChange={handleChange}
                className="w-full bg-[#2B2D31] text-white pl-12 p-3 rounded-lg"
              />

            </div>
          </div>

          <div>
            <label className="text-gray-400">Email</label>

            <div className="relative mt-2">

              <FiMail className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                name="email"
                disabled={!editing}
                value={user.email}
                onChange={handleChange}
                className="w-full bg-[#2B2D31] text-white pl-12 p-3 rounded-lg"
              />

            </div>
          </div>

          <div>
            <label className="text-gray-400">Phone</label>

            <div className="relative mt-2">

              <FiPhone className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                name="phone"
                disabled={!editing}
                value={user.phone}
                onChange={handleChange}
                className="w-full bg-[#2B2D31] text-white pl-12 p-3 rounded-lg"
              />

            </div>
          </div>

          <div>
            <label className="text-gray-400">Role</label>

            <input
              type="text"
              value={user.role}
              disabled
              className="w-full bg-[#2B2D31] text-white p-3 rounded-lg mt-2"
            />
          </div>

        </div>

        <div className="flex justify-end mt-8">

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              <FiEdit />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={() => setEditing(false)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
            >
              <FiSave />
              Save Changes
            </button>
          )}

        </div>

      </div>

    </div>
  );
};

export default Profile;