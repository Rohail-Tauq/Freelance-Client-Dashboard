import React from "react";

const projects = [
  { name: "Website Redesign", status: "In Progress", deadline: "2025-09-30" },
  { name: "Mobile App", status: "Completed", deadline: "2025-08-15" },
  { name: "Marketing Campaign", status: "Pending", deadline: "2025-10-10" },
];

export default function Projects() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Client Projects</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Project</th>
              <th className="p-3">Status</th>
              <th className="p-3">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{proj.name}</td>
                <td className="p-3">{proj.status}</td>
                <td className="p-3">{proj.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
