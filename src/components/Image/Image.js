import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
  height: ${(props) => (props.height ? props.height : '100%')};
  width: ${(props) => (props.width ? props.width : '100%')};
  ${(props) =>
    props.variant === 'rounded' &&
    css`
      clip-path: circle();
    `}
`;

export const Image = (props) => {
  const { src, ...rest } = props;

  return <StyledImage src={src} alt='icon' {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'rounded']),
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  variant: 'default',
};
