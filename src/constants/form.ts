import { Asserts, mixed, number, array, object, string } from 'yup';

export const createSchema = object({
  file: mixed().required(),
  instantsaleprice: number().typeError('Please input sale price.').required('Please input sale price.'),
  country: string().required(),
  name: string().required('Please enter product name.'),
  description: string(),
  address: string(),
  categories: array(
    object().shape({
      name: string().required(),
      id: number().required(),
    })
  ).min(1, 'Please select at least 1 category.'),
});

export type CreateForm = Asserts<typeof createSchema>;

export const initialValue: CreateForm = {
  name: 'Hi',
  file: undefined,
  description: '',
  address: '',
  instantsaleprice: 0,
  country: '',
  categories: [],
};

export const headTable = ['Question', 'Type', 'Category', 'level'];

export const dummy = [
  {
    id: 1,
    name: '1',
    time: '1',
    level: 'advance',
  },
  {
    id: 2,
    name: '2',
    time: '2',
    level: 'advance',
  },
  {
    id: 3,
    name: '3',
    time: '3',
    level: 'advance',
  },
];

export const steps = [
  {
    id: 1,
    label: 'Name Assessment',
  },
  {
    id: 2,
    label: 'Add Question',
  },
  {
    id: 3,
    label: 'Review & Configue',
  },
];
