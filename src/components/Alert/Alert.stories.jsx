import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    variant: String,
    severity: String,
    text: String,
  },
};

const Template = (args) => <Alert {...args} />;

export const ContainedInfoAlert = Template.bind({});
ContainedInfoAlert.args = {
  text: 'This is an info alert — check it out!',
};

export const OutlinedWarningAlert = Template.bind({});
OutlinedWarningAlert.args = {
  text: 'This is an info alert — check it out!',
  variant: 'outlined',
  severity: 'warning',
};
