import React from 'react';
import { Outlet, Route, Link } from 'react-router-dom';

import { Navigation } from 'components/organisms';
import { Button } from 'components/atoms';
import renderTestsRoutes from './tests/Test';
import renderAssessmentsRoutes from './assessments/Assessments';

const navigation = [
  { name: 'My Assessments', href: 'assessments', current: true },
  { name: 'Tests', href: 'tests', current: false },
];

const CustomerPage = () => (
  <>
    <Navigation navigation={navigation} />
    <header className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="grow">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
      <div className="grow-0">
        <Button>
          <Link to="questions/create">Create</Link>
        </Button>
      </div>
    </header>
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  </>
);

const renderCustomerRoutes = () => (
  <Route path="customer" element={<CustomerPage />}>
    {renderTestsRoutes()}
    {renderAssessmentsRoutes()}
  </Route>
);

export default renderCustomerRoutes;
