import React from 'react';
import { Image } from './Image';
import TreeImg from '../../assets/tree-image.jpg';

export default {
  title: 'Example/Image',
  component: Image,
  argTypes: {
    src: String,
    variant: String,
    width: String,
    height: String,
  },
};

const Template = (args) => <Image {...args} />;

export const DefaultSizedImage = Template.bind({});
DefaultSizedImage.args = {
  src: TreeImg,
};

export const RoundedImage = Template.bind({});
RoundedImage.args = {
  src: TreeImg,
  variant: 'rounded',
};
