// App.js
//import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

//pages
import { DetailsPage } from './pages/DetailsPage.js';
import { MasterPage } from './pages/MasterPage.js';
import { EditPage } from './pages/EditPage.js';
import { AddPage } from "./pages/AddPage.js";
import { ChartPage } from "./pages/ChartPage.js";

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

const App = () => (
  <RouterProvider router={router}>
  </RouterProvider>
);

export default App;



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
