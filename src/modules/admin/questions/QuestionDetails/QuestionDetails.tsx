// import classNames from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetQuestion } from '../../../../hooks/api/useQuestions';
import QuestionForm from '../QuestionForm';

interface IQuestionDetails {
  // className?: string;
}

const QuestionDetails: React.FC<IQuestionDetails> = () => {
  // const { className = '' } = props;

  const { questionId } = useParams();

  if (!questionId) return null;

  const { data } = useGetQuestion(questionId);

  return <QuestionForm data={data} />;
};

export default QuestionDetails;
