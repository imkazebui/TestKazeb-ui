import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import renderAdminRoutes from './modules/admin/Admin';

import './App.css';

const Home = () => (
  <>
    <nav>
      <Link to="/about">About</Link>
    </nav>
    <nav>
      <Link to="/admin">Admin</Link>
    </nav>
  </>
);

const App = () => (
  <div className="min-h-full">
    <Routes>
      <Route path="/" element={<Home />} />
      {renderAdminRoutes()}
    </Routes>
  </div>
);

export default App;
