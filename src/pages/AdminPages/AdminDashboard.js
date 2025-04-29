import React, { useState } from "react";
import Sidebar from "./Sidebar";

const AdminDashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed((prev) => !prev);
  const openSidebar = () => setCollapsed(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar collapsed={collapsed} onToggle={toggleSidebar} onOpen={openSidebar} />
      <div className="flex-1 overflow-auto p-6">{children}</div>
    </div>
  );
};

export default AdminDashboard;
