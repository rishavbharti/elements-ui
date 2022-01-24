import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const SIZES = {
  small: '30px',
  medium: '40px',
  large: '50px',
};

const StyledAvatar = styled.div`
  img {
    height: ${(props) => (props.height ? props.height : SIZES[props.size])};
    width: ${(props) => (props.width ? props.width : SIZES[props.size])};
    border-radius: ${(props) =>
      props.variant === 'rounded' ? '50px' : '10px'};
  }
`;

export const Avatar = (props) => {
  const { src, ...rest } = props;

  return (
    <StyledAvatar {...rest}>
      <img src={src} alt='icon' />
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['square', 'rounded']),
  width: PropTypes.string,
  height: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'medium',
  variant: 'rounded',
};
