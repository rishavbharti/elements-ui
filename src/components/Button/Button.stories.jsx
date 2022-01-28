import React from 'react';
import { Button } from './Button';
import SaveIcon from '../../assets/save-solid.svg';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: String,
    variant: String,
    size: String,
    href: String,
    icon: String,
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: 'Contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  label: 'Text',
  variant: 'text',
};

export const Link = Template.bind({});
Link.args = {
  label: 'Link',
  variant: 'link',
  href: 'https://github.com/',
};

export const IconButton = Template.bind({});
IconButton.args = {
  label: 'Save',
  icon: SaveIcon,
  variant: 'outlined',
};
