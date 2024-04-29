import { createContext, useContext } from "react";

export const TIFFRoleContext = createContext({
  roles: [],
  addRoles: () => {},
  removeRoles: () => {},
  updateRoles: () => {},
  getAllRoles: () => {},
  flterRoles: () => {},
  getRoleById: () => {}
});

export const useTIFFRoleContext = () => useContext(TIFFRoleContext);