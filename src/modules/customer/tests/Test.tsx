import React from 'react';
import { Outlet, Route } from 'react-router-dom';

// import QuestionForm from './QuestionForm';
import TestList from './TestList';
// import QuestionDetails from './QuestionDetails';

const Tests = () => <Outlet />;

const renderTestsRoutes = () => (
  <Route path="tests" element={<Tests />}>
    <Route index element={<TestList />} />
    <Route path=":testId" element={<TestList />} />
  </Route>
);

export default renderTestsRoutes;
