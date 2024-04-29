import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const PaginationHandler = ({ data, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        console.log(`Update role with ID: ${id}`);
        navigate(`/edit/${id}`); // Navigate to EditPage with the specified role ID
      };
    
    return(
        <div className="flex justify-center items-center flex-col">
            <ul className="text-center">
                {currentItems.map((role) => (
                    <li key={role.id} className="font-bold mb-4">
                        <div className="flex justify-between items-center">
                            <Link to={`/details/${role.id}`} className="text-2xl text-white hover:text-blue-500 transition-colors duration-300">
                                {role.roleName}
                            </Link>
                            <div className="flex items-center space-x-5">
                                <button
                                    onClick={() => handleUpdate(role.id)}
                                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => onDelete(role.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center items-center flex-col">
                <div className="flex justify-center items-center space-x-5 mb-4">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
                </div>
                <div className="text-white font-bold py-2 px-4 rounded">
                        Page {currentPage} of {totalPages}
                </div>
                </div>
            </div>
    )
}