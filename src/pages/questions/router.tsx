import QuestionList from './list/QuestionList';

export const questionRouter = {
  children: [
    {
      path: 'questions',
      element: <QuestionList />,
    },
  ],
};
