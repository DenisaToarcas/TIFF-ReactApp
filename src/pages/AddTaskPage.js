import React, { useState, useEffect } from "react";
import { useTIFFRoleContext } from "../store/contextProvider";
import { useParams } from "react-router-dom";

export const AddTaskPage = () => {
    const [task_title, setTaskTitle] = useState("");
    const [task_description, setTaskDescription] = useState("");
    const [task_status, setTaskStatus] = useState("");
    const [task_priority, setTaskPriority] = useState("");
  
    const { addTask, getRoleById } = useTIFFRoleContext();

    const { id } = useParams();
    const [role, setRole] = useState(null);
  
    useEffect(() => {
      const fetchRole = async () => {
        try {
          const response = await getRoleById(id);
          setRole(response);
          console.log("Role fetched successfully:", response);
        } catch (error) {
          console.error("Error fetching role:", error);
        }
      };
  
      fetchRole();
    }, [id, getRoleById]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const newTask = {
        id: 0,
        title: task_title,
        description: task_description,
        status: task_status,
        priority: task_priority
      };
      
      try {
        console.log("Adding task:", newTask);
        const response = await addTask(role.id, newTask);
        
        // If successful, reset the form fields
        setTaskTitle("");
        setTaskDescription("");
        setTaskStatus("");
        setTaskPriority("");
  
        console.log("Task added successfully:", response);
      } catch (error) {
        console.error("Error adding task:", error);
        console.log("The task to be added is:", newTask);
      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500">
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskTitle">
            Task Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taskTitle"
            type="text"
            placeholder="Enter task title"
            value={task_title}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskDescription">
            Task Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taskDescription"
            type="text"
            placeholder="Enter task description"
            value={task_description}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskStatus">
            Task Status
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taskStatus"
            type="text"
            placeholder="Enter task status"
            value={task_status}
            onChange={(e) => setTaskStatus(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskPriority">
            Task Priority
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taskPriority"
            type="text"
            placeholder="Enter task priority"
            value={task_priority}
            onChange={(e) => setTaskPriority(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
    </div>
  );

};