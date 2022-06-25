import React, { useEffect, useState } from 'react';

import { Input, TextEditor } from '../../../../components/atoms';
import { FormItem } from '../../../../components/molecules';

interface IQuestionForm {
  initialValues?: {
    category: string;
    type: string;
    question: string;
    input: string;
    options: string[];
    answer: string;
  };
}

const defaultValues = {
  category: 'Javascript',
  type: 'MULTIPLE_CHOICE',
  question: '',
  input: `<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> App = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> {
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
    setFormValues(initialValues);
  }, [initialValues]);

  return (
    <div className="grid grid-cols-1 gap-6">
      <FormItem label="Category">
        <Input value={formValues.category} />
      </FormItem>
      <FormItem label="Type">
        <Input value={formValues.type} />
      </FormItem>
      <FormItem label="Question">
        <Input value={formValues.question} />
      </FormItem>
      <FormItem label="Input">
        <TextEditor value={formValues.input} />
      </FormItem>
      <FormItem label="Option 1">
        <Input value={formValues.options[0]} />
      </FormItem>
      <FormItem label="Option 2">
        <Input value={formValues.options[1]} />
      </FormItem>
      <FormItem label="Option 3">
        <Input value={formValues.options[2]} />
      </FormItem>
      <FormItem label="Option 4">
        <Input value={formValues.options[3]} />
      </FormItem>
      <FormItem label="Answer">
        <Input value={formValues.answer} />
      </FormItem>
    </div>
  );
};

export default QuestionForm;
