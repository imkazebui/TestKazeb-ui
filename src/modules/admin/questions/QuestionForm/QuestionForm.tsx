import React, { useEffect, useState } from 'react';

import { Input, Button, TextEditor } from 'components/atoms';
import { FormItem, RadioGroup } from 'components/molecules';

import { IQuestion, useUpdateQuestion } from 'hooks/api/useQuestions';

interface IQuestionForm {
  data?: IQuestion;
}

const defaultValues = {
  _id: 1,
  category: 'Javascript',
  type: 'MULTIPLE_CHOICE',
  level: 'INTERMEDIATE',
  question: '',
  options: [],
  answer: 0,
};

const QuestionForm: React.FC<IQuestionForm> = (props) => {
  const { data = defaultValues } = props;
  const [formValues, setFormValues] = useState<IQuestion>(defaultValues);
  const [options, setOptions] = useState<
    {
      label: string | React.ReactNode;
      value: string | number;
    }[]
  >(defaultValues.options);
  const updateQuestion = useUpdateQuestion();

  useEffect(() => {
    const newOptions = Array.from(Array(4).keys()).map((o) => ({
      value: o,
      label: <TextEditor />,
    }));

    setOptions(newOptions);
  }, []);

  useEffect(() => {
    setFormValues(data);

    const newOptions = data.options.map((o) => ({
      value: o.id,
      label: <TextEditor value={o.text} />,
    }));

    setOptions(newOptions);
  }, [data]);

  const onChangeAnswer = (answer: number) => {
    setFormValues((preFormData: IQuestion) => {
      const newFormData: IQuestion = { ...preFormData, answer };
      return newFormData;
    });
  };

  const handleSave = () => {
    updateQuestion.mutate(formValues);
  };

  return (
    <form action="#" method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <FormItem name="questionInput" label="Question" className="col-span-6">
              <TextEditor value={formValues.question} />
            </FormItem>

            <FormItem name="questionOptions" label="Options " className="col-span-6">
              <RadioGroup
                options={options}
                onChange={onChangeAnswer}
                selected={formValues.answer}
              />
            </FormItem>

            <FormItem name="questionCategory" label="Category" className="col-span-2">
              <Input name="questionCategory" value={data.category} />
            </FormItem>

            <FormItem name="questionType" label="Type" className="col-span-2">
              <Input name="questionType" value={data.type} />
            </FormItem>

            <FormItem name="questionLevel" label="Level" className="col-span-2">
              <Input name="questionLevel" value={data.level} />
            </FormItem>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </form>
  );
};

export default QuestionForm;
