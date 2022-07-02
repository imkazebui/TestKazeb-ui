import React from 'react';
import { Outlet, Route } from 'react-router-dom';

import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import QuestionDetails from './QuestionDetails';

const Questions = () => <Outlet />;

const renderQuestionsRoutes = () => (
  <Route path="questions" element={<Questions />}>
    <Route index element={<QuestionList />} />
    <Route path="create" element={<QuestionForm />} />
    <Route path=":questionId" element={<QuestionDetails />} />
  </Route>
);

export default renderQuestionsRoutes;
