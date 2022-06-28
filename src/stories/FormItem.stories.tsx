import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input } from '../components/atoms';
import FormItem, { IFormItemProps } from '../components/molecules/FormItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/FormItem',
  component: FormItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<IFormItemProps> = (args) => <FormItem {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Text',
  name: 'test',
  children: <Input name="test" />,
};
