import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextEditor, { ITextEditorProps } from '../components/atoms/TextEditor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TextEditor',
  component: TextEditor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ITextEditorProps> = (args) => <TextEditor {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
