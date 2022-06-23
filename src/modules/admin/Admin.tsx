import React from 'react';
import { Route, Link, Outlet } from 'react-router-dom';

import Test from './test/Test';
import Question from './question/Question';

const AdminPage = () => (
  <>
    <p>Admin Page</p>
    <nav>
      <Link to="test">Test</Link>
    </nav>
    <nav>
      <Link to="question">Question</Link>
    </nav>
    <Outlet />
  </>
);

const renderAdminRoutes = () => (
  <Route path="admin" element={<AdminPage />}>
    <Route path="test" element={<Test />} />
    <Route path="question" element={<Question />} />
  </Route>
);

export default renderAdminRoutes;
