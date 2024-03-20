//editPage.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditableRole from "../components/EditableRole";
import { tiffVolunteersRole } from '../components/constants.js';

export const EditPage = () => {
  const { id } = useParams();
  const roles = tiffVolunteersRole();
  const role = roles.find((role) => role.id === parseInt(id));

  const [updatedRole, setUpdatedRole] = useState(role);

  const handleUpdate = (updatedRoleId, newRoleName) => {
    // Update the role data
    const updatedRoleData = roles.map(role => {
      if (role.id === updatedRoleId) {
        return { ...role, roleName: newRoleName };
      }
      return role;
    });
    // Update state with the new role data
    setUpdatedRole(updatedRoleData.find(role => role.id === updatedRoleId));

    console.log("Updated Role:", updatedRoleData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500">
      <h1 className="text-center text-4xl font-bold mb-8">
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-700 to-pink-500 text-white px-10 py-0">
          Edit<br />Page
        </span>
      </h1>
      {role ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-2xl font-bold mb-8 text-indigo-500 hover:text-blue-500 transition-colors duration-300">Role: {role.roleName}</h5>
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Type: {role.type}</p>
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Number of volunteers: {role.openRoles}</p>
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Schedule: {role.schedule}</p>
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Expectation: {role.expectation}</p>
          </div>
        </div>
      ) : (
        <div>Role not found!</div>
      )}
      {role && (
        <EditableRole role={updatedRole} onUpdate={handleUpdate} />
      )}
    </div>
  );
};