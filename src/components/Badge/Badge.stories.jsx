import React from 'react';
import { Badge } from './Badge';
import EnvelopeIcon from '../../assets/envelope.svg';
import AvatarImg from '../../assets/avatar.png';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: String,
    size: String,
    icon: String,
    badgeContent: String,
    type: String,
  },
};

const Template = (args) => <Badge {...args} />;

export const BadgeIcon = Template.bind({});
BadgeIcon.args = {
  icon: EnvelopeIcon,
  badgeContent: 4,
};

export const BadgeAvatar = Template.bind({});
BadgeAvatar.args = {
  icon: AvatarImg,
  type: 'avatar',
};
