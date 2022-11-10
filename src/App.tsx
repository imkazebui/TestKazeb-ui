import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import renderAdminRoutes from './modules/admin/Admin';
import renderCustomerRoutes from './modules/customer/Customer';

import './App.css';

const Home = () => (
  <>
    <nav>
      <Link to="/customer">Customer</Link>
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
      {renderCustomerRoutes()}
    </Routes>
  </div>
);

export default App;
