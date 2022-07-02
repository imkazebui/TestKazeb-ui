import { useQuery } from 'react-query';
import axios from '../../utilities/axios';

export interface IQuestion {
  _id: number;
  question: string;
  type: string;
  category: string;
  level: string;
}

export const useGetQuestions = () =>
  useQuery<IQuestion[], any>('questions', async () => {
    const { data } = await axios.get('/questions');
    return data;
  });

export const useGetQuestion = (id: number | string) =>
  useQuery<IQuestion, any>(['question', id], async () => {
    const { data } = await axios.get(`/questions/${id}`);
    return data;
  });
