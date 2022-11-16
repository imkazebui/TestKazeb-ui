import React from 'react';
import { Outlet, Route } from 'react-router-dom';
import QuestionList from './QuestionList';
import QuestionDetails from './QuestionDetails';
import QuestionNew from './QuestionNew';

const Questions = () => <Outlet />;

const renderQuestionsRoutes = () => (
  <Route path="questions" element={<Questions />}>
    <Route index element={<QuestionList />} />
    {/* <Route path="create" element={<QuestionForm />} /> */}
    <Route path="new" element={<QuestionNew />} />
    <Route path=":questionId" element={<QuestionDetails />} />
  </Route>
);

export default renderQuestionsRoutes;
