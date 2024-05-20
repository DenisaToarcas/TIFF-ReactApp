import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { PaginationHandler } from "./PaginationHandler.js";
import tiffSVG from "../transilvania-international-film-festival-tiff-logo-vector.svg";
//import { getRoles, deleteRole } from "../api/roles";
import { useTIFFRoleContext } from "../store/contextProvider";
//import { useEffect } from 'react';

export const MasterPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const { removeRoles, filterRoles, getRolesFromUser } = useTIFFRoleContext();

  /*useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles("false");
        setData(response);
        console.log("Roles fetched successfully:", response);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
    
  }, []);
  */

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const user_id = localStorage.getItem("user_id");
        const response = await getRolesFromUser(user_id);
        console.log("Roles from user fetched successfully:", response);
        setData(response);
      }
      catch (error) {
        console.error("Error fetching roles from user:", error);
      }
    }
    fetchRoles();
  }
  , [getRolesFromUser]);


  const handleDelete = async (id) => {
    console.log(`Delete role with ID: ${id}`);
    try {
      await removeRoles(id);
      console.log("Role deleted successfully!");
    }
    catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  const handleAdd = () => {
    console.log("Add a new Role");
    navigate("/add");
  };

  const handleFilter = async () =>
  {
    console.log('Filter the roles!');
    await filterRoles();
    /*const newRoles = async () => {
      try {
        const response = await getRoles("true");
        setData(response);
        console.log("Filtered roles fetched successfully:", response);
      } catch (error) {
        console.error("Error fetching filtered roles:", error);
      }
    }
    newRoles();
    */
  }

  const handleChart = () =>
  {
    console.log('Go to chartPage!');
    navigate("/ChartPage");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500 flex justify-center items-center flex-col">
       {/* TIFF Festival logo */}
      <img src={tiffSVG} alt="TIFF Festival Logo" className="w-screen h-20" />

      <h1 className="text-center text-4xl font-bold mb-8">
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-700 to-pink-500 text-white px-10 py-0">
          Home<br />Page
        </span>
      </h1>
      <PaginationHandler data = {data} onDelete={handleDelete}/>
      <div className="flex space-x-4">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded"
        onClick={handleAdd}
      >
        Add
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
        onClick={handleFilter}
      >
        Filter
      </button>
      <button
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-10 rounded"
        onClick={handleChart}
      >
        ChartPage
      </button>
      </div>
    </div>
  );
};

/*
<ul className="text-center">
        {data.map((role) => (
          <li key={role.id} className="font-bold mb-4">
            <div className="flex justify-between items-center">
              <Link to={`/details/${role.id}`} className="text-2xl text-white hover:text-blue-500 transition-colors duration-300">
                {role.roleName}
              </Link>
              <div className="flex items-center space-x-5">
                <button
                  className="bg-purple-500 bg-opacity-70 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                  onClick={() => handleUpdate(role.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 bg-opacity-70 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={() => handleDelete(role.id)}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2a1 1 0 001 1v8a2 2 0 002 2h8a2 2 0 002-2v-8a1 1 0 001-1v-2a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm3 4a1 1 0 00-1 1v10a1 1 0 102 0V7a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
*/
