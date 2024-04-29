// DetailsPage.js
import { useParams } from "react-router-dom";
//import React, { useState } from "react";
import { tiffVolunteersRole } from '../components/constants.js';

export const DetailsPage = () => {
  const { id } = useParams();
  const roles = tiffVolunteersRole(); // Call the function to get the array of roles
  const role = roles.find((role) => role.id === parseInt(id)); // Find the role with matching id

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500">
      <h1 className="text-center text-4xl font-bold mb-8">
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-700 to-pink-500 text-white px-10 py-0">
          TIFF<br />Volunteers Role
        </span>
      </h1>
      {role ? (
        <div key={role.id} className="card">
          <div className="card-body">
            <h5 className="card-title text-2xl font-bold mb-8 text-indigo-500 hover:text-blue-500 transition-colors duration-300">Role: {role.roleName}</h5>
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Type: {role.type}</p>
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Number of volunteers: {role.openRoles}</p>
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Schedule: {role.schedule}</p>
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Expectation: {role.expectation}</p>
          </div>
        </div>
      ) : (
        <div>Does not exist this role!</div>
      )}
    </div>
    </div>
  );
};
