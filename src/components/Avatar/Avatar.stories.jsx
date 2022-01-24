import React from 'react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/avatar.png';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    src: String,
    size: String,
    variant: String,
    width: String,
    height: String,
  },
};

const Template = (args) => <Avatar {...args} />;

export const RoundedAvatar = Template.bind({});
RoundedAvatar.args = {
  src: AvatarImg,
  size: 'medium',
  variant: 'rounded',
};

export const SquaredAvatar = Template.bind({});
SquaredAvatar.args = {
  src: AvatarImg,
  size: 'medium',
  variant: 'square',
};
