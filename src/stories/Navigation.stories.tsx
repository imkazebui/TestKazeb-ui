import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation, { INavigationProps } from '../components/organisms/Navigation';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Navigation',
  component: Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<INavigationProps> = (args) => (
  <BrowserRouter>
    <div className="min-h-full">
      <Routes>
        <Route path="/" element={<Navigation {...args} />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
