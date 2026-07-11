import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MeetingRoom from "./Pages/MeetingRoom/MeetingRoom";
import Profile from "./Pages/Profile/Profile";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
  path="/meeting/:meetingId"
  element={<MeetingRoom />}
/>
<Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;