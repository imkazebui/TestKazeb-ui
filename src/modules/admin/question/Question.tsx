import React from 'react';

import { Button } from '../../../components/atoms';
import QuestionForm from './QuestionForm';

import styles from './Question.module.css';

const Question = () => (
  <>
    <p className={styles.title}>Question</p>
    <QuestionForm />
    <Button>Add</Button>
  </>
);

export default Question;
