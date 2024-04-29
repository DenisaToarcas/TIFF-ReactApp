import React, { useState } from "react";
//import { v4 as uuid } from "uuid";
//import { createRole } from "../api/roles";
import { useTIFFRoleContext } from "../store/contextProvider";

export const AddPage = () => {
  const [roleName, setRoleName] = useState("");
  const [type, setType] = useState("");
  const [openRoles, setOpenRoles] = useState("");
  const [schedule, setSchedule] = useState("");
  const [expectation, setExpectation] = useState("");

  const { addRoles } = useTIFFRoleContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique ID for the new role
    //const ids = uuid();
    //const uniqueID = ids.slice(0, 10);

    const newRole = {
      id: 0,
      roleName: roleName,
      type: type,
      openRoles: openRoles,
      schedule: schedule,
      expectation: expectation,
    };

    // Update the roles data with the new role
    //tiffRoles.push(newRole);
    
    try {
      console.log("Adding role:", newRole);
      // Call the createRole function from role.js to add the new role
      //const response = await createRole(newRole);

      await addRoles(newRole);
      
      // If successful, reset the form fields
      setRoleName("");
      setType("");
      setOpenRoles("");
      setSchedule("");
      setExpectation("");

      console.log("Role added successfully:", newRole);
    } catch (error) {
      console.error("Error adding role:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500">
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roleName">
            Role Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="roleName"
            type="text"
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            type="text"
            placeholder="Enter type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="openRoles">
            Open Roles
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="openRoles"
            type="text"
            placeholder="Enter number of open roles"
            value={openRoles}
            onChange={(e) => setOpenRoles(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schedule">
            Schedule
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="schedule"
            type="text"
            placeholder="Enter schedule"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expectation">
            Expectation
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expectation"
            placeholder="Enter expectation"
            value={expectation}
            onChange={(e) => setExpectation(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Role
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};