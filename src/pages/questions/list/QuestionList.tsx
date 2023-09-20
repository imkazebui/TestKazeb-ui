import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useGetQuestions } from '../../../apis/questions';

interface DataType {
  _id: string;
  answerText: string;
  answers: string[];
  level: string;
  listAnswers: string[];
  skill: string;
  text: string;
  type: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Question',
    dataIndex: 'text',
    key: 'text',
  },
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: 'Skill',
    dataIndex: 'skill',
    key: 'skill',
  },
  {
    title: 'Type',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <Space size="middle">Delete</Space>,
  },
];

const QuestionList: React.FC = () => {
  const { data: questionData } = useGetQuestions();

  return <Table columns={columns} dataSource={questionData.results} />;
};

export default QuestionList;
