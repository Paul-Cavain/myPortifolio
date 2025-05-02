import React from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Settings, Menu, Mail } from "lucide-react";
import { BsPersonAdd } from "react-icons/bs";

const Sidebar = ({ collapsed, onToggle, onOpen }) => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    if (collapsed) {
      onOpen();
      setTimeout(() => {
        navigate(path);
      }, 200);
    } else {
      navigate(path);
    }
  };

  return (
    <div
      className={`${
        collapsed ? "w-32" : "w-52"
      } bg-white shadow-md h-full px-4 py-6 relative transition-all duration-300`}
    >
      <div className="flex justify-between items-center mb-6">
        {/* Sidebar Title */}
        <h2
          className={`text-2xl font-bold transition-opacity duration-300 ${
            collapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          Admin
        </h2>

        {/* Toggle Button (Hamburger Icon) */}
        <button
          onClick={onToggle}
          className="text-gray-500 hover:text-blue-600"
          aria-label="Toggle Sidebar"
        >
          <Menu />
        </button>
      </div>

      {/* Menu */}
      <nav className="space-y-6 mt-6">
        <button
          onClick={() => handleNavClick("/Dashboard")}
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 w-full"
        >
          <LayoutDashboard className="w-6 h-6" />
          {!collapsed && <span>Dashboard</span>}
        </button>

        <button
          onClick={() => handleNavClick("/Messages")}
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 w-full"
        >
          <Mail className="w-6 h-6" />
          {!collapsed && <span>Messages</span>}
        </button>
        <button
          onClick={() => handleNavClick("/Profiles")}
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 w-full"
        >
          <BsPersonAdd className="w-6 h-6" />
          {!collapsed && <span>Profles</span>}
        </button>

        <button
          onClick={() => handleNavClick("/Settings")}
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 w-full"
        >
          <Settings className="w-6 h-6" />
          {!collapsed && <span>Settings</span>}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
