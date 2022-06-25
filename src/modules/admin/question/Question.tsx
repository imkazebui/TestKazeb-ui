import React from 'react';

import { Button } from '../../../components/atoms';
import QuestionForm from './QuestionForm';

import styles from './Question.module.css';

const Question = () => (
  <div className="container mx-auto">
    <p className={styles.title}>Question</p>
    <QuestionForm />
    <Button>Add</Button>
  </div>
);

export default Question;
