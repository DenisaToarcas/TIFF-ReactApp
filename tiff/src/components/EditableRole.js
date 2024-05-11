import React, { useState } from "react";

const EditableRole = ({ role, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRoleName, setUpdatedRoleName] = useState(role.roleName);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedRoleName(role.roleName); // Reset to original role name
  };

  const handleSaveClick = () => {
    onUpdate(role.id, updatedRoleName);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedRoleName(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={updatedRoleName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <button
            onClick={handleSaveClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default EditableRole;
