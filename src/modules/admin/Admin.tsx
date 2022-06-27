import React from 'react';
import { Outlet, Route } from 'react-router-dom';

import { Navigation } from '../../components/organisms';
import { Button } from '../../components/atoms';
import Tests from './tests/Test';
import renderQuestionsRoutes from './questions/Question';

const AdminPage = () => (
  <>
    <Navigation />
    <header className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="grow">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
      <div className="grow-0">
        <Button>Create</Button>
      </div>
    </header>
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  </>
);

const renderAdminRoutes = () => (
  <Route path="admin" element={<AdminPage />}>
    <Route path="tests" element={<Tests />} />
    {renderQuestionsRoutes()}
  </Route>
);

export default renderAdminRoutes;
