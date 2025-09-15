import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { username, setUsername } = useContext(UserContext);
  const [name, setName] = useState(username);
  const [email, setEmail] = useState("john@example.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(name);
    alert("Profile updated!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
