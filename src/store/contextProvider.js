import { createContext, useContext } from "react";
import { getTaskById, getTasks } from "../api/tasks";

export const TIFFRoleContext = createContext({
  roles: [],
  addRoles: () => {},
  removeRoles: () => {},
  updateRoles: () => {},
  getAllRoles: () => {},
  filterRoles: () => {},
  getRoleById: () => {},
  getTasks: () => {},
  getTaskById: () => {},
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {}
});

export const useTIFFRoleContext = () => useContext(TIFFRoleContext);