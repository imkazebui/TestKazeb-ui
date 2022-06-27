import React from 'react';
import { Outlet, Route } from 'react-router-dom';

import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

const Questions = () => <Outlet />;

const renderQuestionsRoutes = () => (
  <Route path="questions" element={<Questions />}>
    <Route index element={<QuestionList />} />
    <Route path="create" element={<QuestionForm />} />
    <Route path="edit" element={<QuestionForm />} />
  </Route>
);

export default renderQuestionsRoutes;
