import { useQuery } from '@tanstack/react-query';
import axios from '../utils/axios';

const getQuestions = async () => {
  const { data } = await axios.get('questions');
  return data;
};

export const useGetQuestions = () =>
  useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
  });
