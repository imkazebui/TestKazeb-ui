import { useQuery } from 'react-query';
import axios from '../../utilities/axios';

export interface ITest {
  _id: number;
  name: string;
  summary: string;
  duration: number;
  type: string;
  description: string;
  level: string;
  coveredSkills: Array<string>;
  previewQuestions: Array<string>;
  questions: Array<string>;
}

export const useGetTests = () =>
  useQuery<ITest[], any>('tests', async () => {
    const { data } = await axios.get('/tests');
    return data;
  });

export const useGetTest = (id: number | string) =>
  useQuery<ITest, any>(['test', id], async () => {
    const { data } = await axios.get(`/tests/${id}`);
    return data;
  });
