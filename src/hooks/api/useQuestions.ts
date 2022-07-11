import { useQuery, useMutation } from 'react-query';
import axios from '../../utilities/axios';

export interface IQuestion {
  _id: number;
  question: string;
  type: string;
  category: string;
  level: string;
  options: {
    id: number;
    text: string;
  }[];
  answer: number;
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

export const useUpdateQuestion = () =>
  // eslint-disable-next-line no-underscore-dangle
  useMutation((question: IQuestion) => axios.put(`/questions/${question._id}`, question));
