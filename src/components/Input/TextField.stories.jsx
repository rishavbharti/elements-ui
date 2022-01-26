import React from 'react';
import { TextField } from './TextField';

export default {
  title: 'Example/Input',
  component: TextField,
  argTypes: {
    label: String,
    required: Boolean,
    helperText: String,
    error: Boolean,
    width: Number,
  },
};

const Template = (args) => <TextField {...args} />;

export const Textfield = Template.bind({});
Textfield.args = {
  label: 'Name',
  required: true,
  helperText: 'Please enter your name',
};
