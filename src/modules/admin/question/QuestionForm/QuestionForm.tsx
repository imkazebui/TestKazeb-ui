import React from 'react';

import { Input } from '../../../../components/atoms';
import { FormItem } from '../../../../components/molecules';

const Question = () => (
  <>
    <FormItem label="Category">
      <Input />
    </FormItem>
    <FormItem label="Type">
      <Input />
    </FormItem>
    <FormItem label="Name">
      <Input />
    </FormItem>
    <FormItem label="Content">
      <Input />
    </FormItem>
    <FormItem label="Answers">
      <Input />
    </FormItem>
  </>
);

export default Question;
