//import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//import { getRoleById } from "../api/roles";
import { useState, useEffect } from "react";
import { useTIFFRoleContext } from "../store/contextProvider";

export const DetailsPage = () => {
  const { id } = useParams();
  const [role, setRole] = useState(null);

  const navigate = useNavigate();

  const { getRoleById } = useTIFFRoleContext();

  const handleClick = () => {
    console.log("Go back to HomePage!");
    navigate("/master"); // Navigate to HomePage
  };

  useEffect (() => {
    const fetchRole = async () => {
      const response = await getRoleById(id);
      setRole(response);
      console.log("Role fetched successfully:", response);
    };

    fetchRole();
  }, [id, getRoleById]);

  /*useEffect (() => {
    // Call the getRoleById function from roles.js
    // to fetch the role with the specified ID
    const fetchRole = async () => {
      try {
        const response = await getRoleById(id);
        setRole(response);
      } catch (error) {
        console.error("Error fetching role:", error);
      }
    };

    fetchRole();
  }, [id]);
  */

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500">
      <div className="relative">
      <button className="absolute top-1 right-1 bg-blue-500 bg-opacity-70 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          onClick={() => handleClick()}
      >
        HomePage
      </button>
      </div>
      <h1 className="text-center text-4xl font-bold mb-8">
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-700 to-pink-500 text-white px-10 py-0">
          Details<br />Page
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
            <p className="card-text text-lg font-bold mb-1 text-blue-900">Tasks:</p>
            <ul>
              {role.tasks.map((task, index) => (
                <li key={index}>
                  {/* Render task properties */}
                  <p className="card-text text-lg font-bold mb-1 text-blue-900">Task ID: {task.id}</p>
                  <p className="card-text text-lg font-bold mb-1 text-blue-900">Task Title: {task.title}</p>
                  <p className="card-text text-lg font-bold mb-1 text-blue-900">Task Description: {task.description}</p>
                  <p className="card-text text-lg font-bold mb-1 text-blue-900">Task Status: {task.status}</p>
                  <p className="card-text text-lg font-bold mb-1 text-blue-900">Task Priority: {task.priority}</p>
                  {/* Add more task properties as needed */}
                </li>
              ))}
            </ul>

          </div>
        </div>
      ) : (
        <div>Role not found!</div>
      )}
    </div>
  );
};
