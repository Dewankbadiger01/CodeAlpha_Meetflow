import React, { useState } from "react";
import SideBar from "../../Components/Dashboard/SideBar";
import Header from "../../Components/Dashboard/Header";
import ActionCard from "../../Components/Dashboard/ActionCard";
import StatsCard from "../../Components/Dashboard/StatsCard";
import RecentMeeting from "../../Components/Dashboard/RecentMeeting";
import UpcomingMeeting from "../../Components/Dashboard/UpcomingMeeting";
import CreateMeeting from "../../Components/Dashboard/CreateMeeting";
import JoinMeeting from "../../Components/Dashboard/JoinMeeting";


const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <SideBar/>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <Header/>

        {/* Action Cards */}
        <ActionCard
          onCreate={() => setShowCreateModal(true)}
          onJoin={() => setShowJoinModal(true)}
        />

        {/* Statistics */}
        <StatsCard />

        {/* Recent Meetings */}
        <RecentMeeting />

        {/* Upcoming Meetings */}
        <UpcomingMeeting
          onJoin={() => setShowJoinModal(true)}
        />
      </main>

      {/* Create Meeting Modal */}
      {showCreateModal && (
        <CreateMeeting
          onClose={() => setShowCreateModal(false)}
        />
      )}

      {/* Join Meeting Modal */}
      {showJoinModal && (
        <JoinMeeting
          onClose={() => setShowJoinModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;