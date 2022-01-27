import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { defaultTheme as theme } from '../../shared';
import { Image } from '../Image';

const StyledCardMedia = styled.div`
  ${(props) =>
    props.roundedCorners &&
    css`
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    `}

  position: relative;
  max-width: ${(props) => props.maxWidth || 'inherit'};

  img {
    object-fit: cover;
    border-radius: inherit;
  }

  div {
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    padding: 1rem 1rem;
    color: ${theme.textOnPrimary};
    max-width: inherit;
    overflow-wrap: break-word;
  }
`;

export const CardMedia = (props) => {
  const { roundedCorners, src, maxWidth, alt } = props;

  return (
    <StyledCardMedia roundedCorners={roundedCorners} maxWidth={maxWidth}>
      <Image src={src} alt={alt} />
      {props.children}
    </StyledCardMedia>
  );
};

CardMedia.defaultProps = {
  roundedCorners: true,
};
CardMedia.propTypes = {
  maxWidth: PropTypes.string,
  roundedCorners: PropTypes.bool,
  src: PropTypes.string,
};
