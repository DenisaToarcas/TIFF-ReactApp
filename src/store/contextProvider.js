import { createContext, useContext } from "react";

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
  deleteTask: () => {},
  login: () => {},
  signUp: () => {},
  getUsers: () => {},
  getUserPersonalInfo: () => {},
  getTokenFromUser: () => {},
  setUser: () => {},
  setToken: () => {}
});

export const useTIFFRoleContext = () => useContext(TIFFRoleContext);