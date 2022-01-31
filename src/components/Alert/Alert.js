import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import PropTypes from 'prop-types';

import { bodyStyles } from '../../shared';
import { defaultTheme as theme } from '../../shared';
import { fontSize } from '../../shared/typography';

const VARIANTS = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
};

const severityColors = {
  error: theme.status.error,
  info: theme.primary,
  success: theme.status.success,
  warning: theme.status.warning,
};

const StyledAlert = styled.div`
  border-radius: 6px;
  font-size: ${fontSize.sm}px;

  outline: none;
  border: none;
  overflow: hidden;
  padding: 16px 24px;
  background: transparent;

  ${(props) =>
    props.variant === VARIANTS.CONTAINED &&
    css`
      background-color: ${severityColors[props.severity]};
      color: ${theme.textOnPrimary};
      font-weight: bold;
    `}

  ${(props) =>
    props.variant === VARIANTS.OUTLINED &&
    css`
      color: ${severityColors[props.severity]};
      border: 1px solid ${severityColors[props.severity]};
    `}
`;

export const Alert = (props) => {
  const { text, ...rest } = props;

  return (
    <>
      <Global styles={bodyStyles} />
      <StyledAlert {...rest}>{text}</StyledAlert>
    </>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined']),
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  text: PropTypes.string,
};

Alert.defaultProps = {
  variant: 'outlined',
  severity: 'info',
};
