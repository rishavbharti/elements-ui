import React from 'react';
import { TextField } from './TextField';

export default {
  title: 'Components/Input',
  component: TextField,
  argTypes: {
    label: String,
    required: Boolean,
    helperText: String,
    error: Boolean,
    width: Number,
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <TextField {...args} />;

export const Textfield = Template.bind({});
Textfield.args = {
  label: 'Name',
  required: true,
  helperText: 'Please enter your name',
};
