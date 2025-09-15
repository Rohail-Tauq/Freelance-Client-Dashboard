import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Folder, User, X } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const linkClasses =
    "flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-indigo-200 transition";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <div className="flex justify-between items-center p-6 border-b md:block">
          <div className="text-2xl font-bold text-indigo-600">Dashboard</div>
          {/* Close button (mobile only) */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2 px-4 mt-4">
          <NavLink to="/" className={linkClasses} onClick={onClose}>
            <Home size={20} /> <span>Overview</span>
          </NavLink>
          <NavLink to="/projects" className={linkClasses} onClick={onClose}>
            <Folder size={20} /> <span>Projects</span>
          </NavLink>
          <NavLink to="/profile" className={linkClasses} onClick={onClose}>
            <User size={20} /> <span>Profile</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}
