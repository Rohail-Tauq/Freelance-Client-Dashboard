import React, { useContext } from "react";
import { Menu } from "lucide-react";
import { UserContext } from "../context/UserContext";

export default function Header({ onMenuClick }) {
  const { username } = useContext(UserContext);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden text-gray-600 hover:text-gray-800"
        onClick={onMenuClick}
      >
        <Menu size={24} />
      </button>

      <h1 className="text-lg font-semibold text-gray-800">Freelance Admin</h1>

      <div className="flex items-center space-x-4">
        <span className="text-gray-600 hidden sm:block">
          Hello, {username || "User"}
        </span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
