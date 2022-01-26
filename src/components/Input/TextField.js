import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import PropTypes from 'prop-types';

import { defaultTheme as theme } from '../../shared';
import { bodyStyles } from '../../shared';
import { fontSize } from '../../shared/typography';

const Label = styled.p`
  font-size: ${fontSize.sm}px;
  margin: 0.5rem 0 0.5rem 0.5rem;
  color: ${(props) => (props.error ? theme.status.error : theme.disabled)};
`;

const HelperText = styled.p`
  font-size: ${fontSize.xs}px;
  margin: 0.5rem 0 0.5rem 0.5rem;
  color: ${(props) => (props.error ? theme.status.error : theme.disabled)};
`;

const StyledInput = styled.input`
  font-size: ${fontSize.base}px;
  padding: 0.8rem 0.5rem;
  border: 1px solid ${theme.textOnDisabled};
  border-radius: 6px;
  width: ${(props) => props.width}px;
  caret-color: ${theme.primary};
  margin: 0;
  outline: none;

  &:hover {
    border-color: ${theme.textFieldLabel};
  }

  &:focus {
    border: 2px solid ${theme.primary};
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${theme.status.error};
      &:hover {
        border-color: ${theme.status.error};
      }
      &:focus {
        border: 2px solid ${theme.status.error};
      }
    `}
`;

export const TextField = (props) => {
  const { label, required, error, helperText, ...rest } = props;

  return (
    <>
      <Global styles={bodyStyles} />
      {label && (
        <Label error={error}>
          {label}
          {required && '*'}
        </Label>
      )}
      <StyledInput error={error} {...rest} />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  width: PropTypes.number,
};

TextField.defaultProps = {};
