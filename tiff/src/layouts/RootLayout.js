import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {

  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Router</h1>
          <NavLink to="/">MasterPage</NavLink>
          <NavLink to="/details">DetailsPage</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
