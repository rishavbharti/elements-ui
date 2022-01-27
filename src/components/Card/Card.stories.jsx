import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions } from './index';
import CardImg from '../../assets/card-image.jpg';
import AvatarImg from '../../assets/avatar.png';
import { Avatar } from '../Avatar';
import { Button } from '../Button';

export default {
  title: 'Components/Card',
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
        <h3>Happiness Manifesto</h3>
        <p>by Rishav Bharti</p>
      </div>
      <p>
        Live in the present and make it so beautiful that it’s worth
        remembering. - Arnold H. Glasow
      </p>
    </CardContent>
    <CardActions>
      <Button variant='text' label='Know More' />
    </CardActions>
  </Card>
);

export const CardWithTextOverMedia = (args) => (
  <Card {...args}>
    <CardMedia height={200} src={CardImg} alt='card'>
      <div>
        <h3>Happiness Manifesto</h3>
        <p>by Rishav Bharti</p>
      </div>
    </CardMedia>
    <CardContent>
      <p>
        Live in the present and make it so beautiful that it’s worth
        remembering. - Arnold H. Glasow
      </p>
    </CardContent>
    <CardActions>
      <Button variant='text' label='Know More' />
    </CardActions>
  </Card>
);

export const CardWithHeader = (args) => (
  <Card {...args}>
    <CardHeader
      avatar={<Avatar src={AvatarImg} />}
      TitleComp='h4'
      title='Happiness Manifesto'
      subtitle='by Rishav Bharti'
    />
    <CardMedia height={200} src={CardImg} alt='card' roundedCorners={false} />
    <CardContent>
      <div>
        <h3>Happiness Manifesto</h3>
        <p>by Rishav Bharti</p>
      </div>
      <p>
        Live in the present and make it so beautiful that it’s worth
        remembering. - Arnold H. Glasow
      </p>
    </CardContent>
    <CardActions>
      <Button variant='text' label='Know More' />
    </CardActions>
  </Card>
);

export const TextOnlyCard = (args) => (
  <Card {...args}>
    <CardContent>
      <div>
        <h3>Happiness Manifesto</h3>
        <p>by Rishav Bharti</p>
      </div>
      <p>
        Live in the present and make it so beautiful that it’s worth
        remembering. - Arnold H. Glasow
      </p>
    </CardContent>
    <CardActions>
      <Button variant='text' label='Learn More' />
    </CardActions>
  </Card>
);

export const HorizontalCard = (args) => (
  <Card maxWidth={450} direction='row' {...args}>
    <CardMedia src={CardImg} alt='card' maxWidth='180px' />
    <div>
      <CardContent>
        <div>
          <h4>Happiness Manifesto</h4>
          <p>by Rishav Bharti</p>
        </div>
        <p>
          Live in the present and make it so beautiful that it’s worth
          remembering. - Arnold H. Glasow
        </p>
      </CardContent>
      <CardActions>
        <Button variant='text' label='Know More' />
      </CardActions>
    </div>
  </Card>
);
