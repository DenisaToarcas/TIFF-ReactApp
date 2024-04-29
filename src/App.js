// App.js
//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import { TIFFRoleContext } from "./store/contextProvider";

//pages
import { DetailsPage } from './pages/DetailsPage.js';
import { MasterPage } from './pages/MasterPage.js';
import { EditPage } from './pages/EditPage.js';
import { AddPage } from "./pages/AddPage.js";
import { ChartPage } from "./pages/ChartPage.js";
import { createRole, updateRole } from "./api/roles.js";
import { getRoles, deleteRole } from "./api/roles.js";
import { getRoleById } from "./api/roles.js";
import { checkServer } from "./components/checkServer.js";
import io from "socket.io-client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage />
  },
  {
    path: "/details/:id",
    element: <DetailsPage />
  },
  {
    path: "/edit/:id",
    element: <EditPage />
  },
  {
    path: "/add",
    element: <AddPage />
  },
  {
    path: "/ChartPage",
    element: <ChartPage />
  },
  {
    path: "*",
    element: <h1>404 Error - Page Not Found</h1>
  }
]);

export default function App() {
  const [server, setServer] = React.useState(true);
  const [roles, setRoles] = React.useState([]);

  async function fetchRoles(){
    const response = await getRoles();
    setRoles(response);
  }

  useEffect(() => {
    checkServer().then(() => {
      console.log("Server is running");
      setServer(true);
      fetchRoles();
    }).catch(() => {
      console.log("Server is not running");
      setServer(false);
    }
    );
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:9090");
    socket.on("added a new role", (newRole) => {
      setRoles([...roles, newRole]);
      console.log("added a new role", newRole);
    });
    socket.on("connect_error", (error) => {
      console.log("Error connecting to server:", error);
    });
    socket.on("connect_timeout", (timeout) => {
      console.log("Connection timeout:", timeout);
    });
    return () => {
      socket.disconnect();
    }
  }, [setRoles, roles]);

  // Server status check for conditional rendering
  if (!server) {
    return <h1>Server is down, please wait...</h1>;
  }

  const context = {
    roles,
    addRoles: async (role) => {
      const newRoles = await createRole(role);
      setRoles([...roles, newRoles]);
    },
    removeRoles: async (id) => {
      const remainingRoles = await deleteRole(id);
      console.log(remainingRoles);
      setRoles([remainingRoles]);
    },
    updateRoles: async (id, updatedRole) => {
      const newRoleUpdated = await updateRole(id, updatedRole);
      setRoles(roles.map((role) => (role.id === newRoleUpdated.id ? newRoleUpdated : role)));
      return newRoleUpdated;
    },
    getAllRoles: () => {
      return roles;
    },
    filterRoles: async () => {
      const response = await getRoles("true");
      console.log(response);
      setRoles(response);
    },
    getRoleById: async (id) => {
      try{
        const response = await getRoleById(id);
        return response;
      }
      catch (error) {
        console.error("Error fetching role:", error);
      }
  }
  };

  return (
    <TIFFRoleContext.Provider value={context}>
        <RouterProvider router={router}/>
      </TIFFRoleContext.Provider>
  );
}



/* ANOTHER WAY TO DO THE ROUTING PART
//layouts
import RootLayout from './layouts/RootLayout.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <MasterPage />} />
      <Route path="/details/:id" element={ <DetailsPage />} />
      <Route path="*" element={ <h1>404 Error - Page Not Found</h1> } />
    </Route>
  )
);

const App = () => {
  return (
  <RouterProvider router={router} />
  )
  };

  export default App;

  const root = createRoot(document.getElementById("App"));

  root.render(
    <RouterProvider router={router} />
  );

*/
