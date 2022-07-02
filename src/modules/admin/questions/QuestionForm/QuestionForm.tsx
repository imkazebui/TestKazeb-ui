import React, { useEffect, useState } from 'react';

import { Input, Button, TextEditor } from '../../../../components/atoms';
import { FormItem, RadioGroup } from '../../../../components/molecules';

import { IQuestion } from '../../../../hooks/api/useQuestions';

interface IQuestionForm {
  initialValues?: IQuestion;
}

const defaultValues = {
  category: 'Javascript',
  type: 'MULTIPLE_CHOICE',
  question: `<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> App = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> {
&nbsp;<span class="hljs-keyword">const</span> [counter, setCounter] = useState(<span class="hljs-number">0</span>);
&nbsp;useEffect(
&nbsp;&nbsp;&nbsp;<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Hello'</span>);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setCounter(<span class="hljs-number">1</span>);
&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;[props.visible]
&nbsp;);
&nbsp;<span class="hljs-keyword">return</span> <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{counter}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>;
};
</pre>`,
  options: ['', '', '', ''],
  answer: '0',
};

const QuestionForm: React.FC<IQuestionForm> = (props) => {
  const { initialValues = defaultValues } = props;
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    /**
     * TODO: should update initialValues instead of formValues
     */
    setFormValues(formValues);
  }, [initialValues]);

  const options = [
    {
      label: <TextEditor />,
      value: 0,
    },
    {
      label: <TextEditor />,
      value: 1,
    },
    {
      label: <TextEditor />,
      value: 2,
    },
    {
      label: <TextEditor />,
      value: 3,
    },
  ];

  return (
    <form action="#" method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <FormItem name="questionInput" label="Question " className="col-span-6">
              <TextEditor value={formValues.question} />
            </FormItem>

            <FormItem name="questionOptions" label="Options " className="col-span-6">
              <RadioGroup disabled options={options} />
            </FormItem>

            <FormItem name="questionCategory" label="Category" className="col-span-2">
              <Input name="questionCategory" />
            </FormItem>

            <FormItem name="questionType" label="Type" className="col-span-2">
              <Input name="questionType" />
            </FormItem>

            <FormItem name="questionLevel" label="Level" className="col-span-2">
              <Input name="questionLevel" />
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
          <Button>Save</Button>
        </div>
      </div>
    </form>
  );
};

export default QuestionForm;
