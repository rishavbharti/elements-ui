import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions } from './index';
import CardImg from '../../assets/card-image.jpg';
import AvatarImg from '../../assets/avatar.png';
import Avatar from '../Avatar';
import Button from '../Button';

export default {
  title: 'Example/Card',
  component: Card,
  subcomponents: { CardHeader, CardMedia, CardContent, CardActions },
  argTypes: {
    maxWidth: String,
    maxHeight: String,
    direction: String,
  },
};

export const BasicCard = (args) => (
  <Card {...args}>
    <CardMedia height={200} src={CardImg} alt='card' />
    <CardContent>
      <div>
        <h3>Our Changing Planet</h3>
        <p>by Kurt Wagner</p>
      </div>
      <p>
        Visit ten places on our planet that are undergoing the biggest changes
        today.
      </p>
    </CardContent>
    <CardActions>
      <Button variant='text' label='Visit' />
    </CardActions>
  </Card>
);

export const CardWithTextOverMedia = (args) => (
  <Card {...args}>
    <CardMedia height={200} src={CardImg} alt='card'>
      <div>
        <h3>Our Changing Planet</h3>
        <p>by Kurt Wagner</p>
      </div>
    </CardMedia>
    <CardContent>
      <p>
        Visit ten places on our planet that are undergoing the biggest changes
        today.
      </p>
    </CardContent>
    <CardActions>
      <Button variant='text' label='Visit' />
    </CardActions>
  </Card>
);

export const CardWithHeader = (args) => (
  <Card {...args}>
    <CardHeader
      avatar={<Avatar src={AvatarImg} />}
      TitleComp='h3'
      title='Our Changing Planet'
      subtitle='by Kurt Wagner'
    />
    <CardMedia height={200} src={CardImg} alt='card' roundedCorners='false' />
    <CardContent>
      <div>
        <h3>Our Changing Planet</h3>
        <p>by Kurt Wagner</p>
      </div>
      <p>
        Visit ten places on our planet that are undergoing the biggest changes
        today.
      </p>
    </CardContent>
    <CardActions>
      <Button variant='text' label='Visit' />
    </CardActions>
  </Card>
);

export const TextOnlyCard = (args) => (
  <Card {...args}>
    <CardContent>
      <div>
        <h3>Our Changing Planet</h3>
        <p>by Kurt Wagner</p>
      </div>
      <p>
        Visit ten places on our planet that are undergoing the biggest changes
        today.
      </p>
    </CardContent>
    <CardActions>
      <Button variant='text' label='Learn More' />
    </CardActions>
  </Card>
);

export const HorizontalCard = (args) => (
  <Card maxWidth={450} direction='row' maxHeight={200} {...args}>
    <CardMedia src={CardImg} alt='card' maxWidth='180px' />
    <div>
      <CardContent>
        <div>
          <h4>Our Changing Planet</h4>
          <p>by Kurt Wagner</p>
        </div>
        <p>
          Visit places on our planet that are undergoing the biggest changes.
        </p>
      </CardContent>
      <CardActions>
        <Button variant='text' label='Visit' />
      </CardActions>
    </div>
  </Card>
);
