import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { defaultTheme as theme } from '../../shared';

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const StyledBadge = styled.div`
  position: relative;
  width: fit-content;

  p {
    color: ${theme.textOnPrimary};
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      p {
        background: ${theme.primary};
      }
    `};

  ${(props) =>
    props.variant === 'success' &&
    css`
      p {
        background: ${theme.status.success};
      }
    `};

  ${(props) =>
    props.variant === 'warning' &&
    css`
      p {
        background: ${theme.status.warning};
      }
    `};

  ${(props) =>
    props.variant === 'error' &&
    css`
      p {
        background: ${theme.status.error};
      }
    `};

  ${(props) =>
    props.type === 'avatar' &&
    css`
      img {
        height: 50px;
        width: 50px;
        border-radius: 50px;
      }

      p {
        border-radius: 50px;
        height: 10px;
        width: 10px;
        padding: 0;
        position: absolute;
        top: 1rem;
        left: 2.6rem;
      }
    `}

  ${(props) =>
    props.size === SIZES.SMALL &&
    props.type !== 'avatar' &&
    css`
      img {
        height: 30px;
        width: 30px;
      }

      p {
        font-size: 0.8rem;
        color: ${theme.textOnPrimary};
        border-radius: 50px;
        padding: 0.2rem 0.4rem;
        position: absolute;
        bottom: 0.7rem;
        left: 1.2rem;
      }
    `};

  ${(props) =>
    props.size === SIZES.MEDIUM &&
    props.type !== 'avatar' &&
    css`
      img {
        height: 50px;
        width: 50px;
      }

      p {
        font-size: 1rem;
        color: ${theme.textOnPrimary};
        border-radius: 50px;
        padding: 0.4rem 0.7rem;
        position: absolute;
        bottom: 1rem;
        left: 2rem;
      }
    `};
`;

export const Badge = (props) => {
  const { icon, badgeContent, type } = props;

  return (
    <StyledBadge {...props}>
      <img src={icon} alt='icon' />
      <p>{type !== 'avatar' && (badgeContent <= 99 ? badgeContent : '99+')}</p>
    </StyledBadge>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'error'])
    .isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
  type: PropTypes.oneOf(['avatar', 'icon']),
};

Badge.defaultProps = {
  variant: 'primary',
  size: 'small',
};
