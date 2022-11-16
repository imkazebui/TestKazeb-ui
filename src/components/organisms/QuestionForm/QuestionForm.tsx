import React, { useEffect, useState } from 'react';
import { Input, Button, TextEditor } from 'components/atoms';
import { FormItem, RadioGroup } from 'components/molecules';
import { IQuestion, useUpdateQuestion } from 'hooks/api/useQuestions';
import { Form, Formik } from 'formik';
import { XIcon } from '@heroicons/react/solid';
import { createSchema, initialValue } from 'constants/form';

interface IQuestionForm {
  data?: IQuestion;
  handleClose?: () => void;
}

const defaultValues = {
  _id: 1,
  category: 'Javascript',
  type: 'MULTIPLE_CHOICE',
  level: 'INTERMEDIATE',
  question: '',
  options: [],
  answer: 1,
};

const QuestionForm: React.FC<IQuestionForm> = (props) => {
  const { data = defaultValues, handleClose } = props;
  const [formValues, setFormValues] = useState<IQuestion>(defaultValues);
  const [options, setOptions] = useState<{
    label: string | React.ReactNode;
    value: string | number;
  }[]>(defaultValues.options);
  const updateQuestion = useUpdateQuestion();
  useEffect(() => {
    setFormValues(data);
    const newOptions = data.options.map((o) => ({
      value: o.id,
      label: <TextEditor value={o.text} />,
    }));
    setOptions(newOptions);
  }, [data]);

  useEffect(() => {
    const newOptions = Array.from(Array(4).keys()).map((o) => ({
      value: o,
      label: '<TextEditor />',
    }));
    setOptions(newOptions);
  }, []);

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
    <Formik
      initialValues={initialValue}
      validationSchema={createSchema}
      onSubmit={(values: any) => {
      }}
      validateOnMount
    >
      {({ values }) => {
        // eslint-disable-next-line no-console
        console.log('values', values);
        return (
          <Form>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="bg-white">
                <div className="py-3 bg-cyan-700 grid grid-cols-3 gap-4 items-center">
                  <span className="col-start-1 col-end-1 text-left pl-4 text-white font-bold text-2xl">New Question</span>
                  <div className="col-end-5 col-span-1 text-right">
                    <Button className="mx-2 bg-white text-black hover:bg-slate-200" onClick={handleClose}>Cancel</Button>
                    <Button className="mx-2 bg-emerald-500 hover:bg-emerald-600" onClick={handleSave}>Save</Button>
                    <Button className="bg-transparent" onClick={handleClose}>
                      <XIcon className="h-5 w-5 bg-transparent text-white" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-8 sm:p-6 px-4 ">
                  <FormItem name="name" label="Question" className="col-span-6">
                    <TextEditor main placeHolder="For example: What attracts you most to our company" value={formValues.question} />
                  </FormItem>

                  <FormItem name="questionOptions" label="Select the right answer" className="col-span-6">
                    <RadioGroup
                      options={options}
                      onChange={onChangeAnswer}
                      selected={formValues.answer}
                    />
                  </FormItem>

                  <FormItem name="name" label="Category" className="col-span-6">
                    <Input name="name" value={data.category} />
                  </FormItem>

                  <FormItem name="questionType" label="Type" className="col-span-6">
                    <Input name="questionType" value={data.type} />
                  </FormItem>

                  <FormItem name="questionLevel" label="Level" className="col-span-6">
                    <Input name="questionLevel" value={data.level} />
                  </FormItem>

                  <div className="col-span-6 sm:col-span-6">
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
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default QuestionForm;
