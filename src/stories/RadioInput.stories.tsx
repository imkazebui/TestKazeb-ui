import React from 'react';
import { Story, Meta } from '@storybook/react';

import RadioInput, { IRadioInputProps } from '../components/molecules/RadioInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/RadioInput',
  component: RadioInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<IRadioInputProps> = (args) => <RadioInput {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
