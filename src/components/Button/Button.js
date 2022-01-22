import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { defaultTheme as theme } from '../../shared';
import { fontWeight, fontSize } from '../../shared/typography';

const VARIANTS = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
  TEXT: 'text',
  LINK: 'link',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const StyledButton = styled.button`
  border-radius: 6px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${theme.primaryFont};
  font-size: ${(props) =>
    props.size === SIZES.SMALL ? fontSize.xs : fontSize.sm}px;
  font-weight: ${fontWeight.extrabold};

  outline: none;
  border: none;
  overflow: hidden;
  padding: ${(props) =>
    props.size === SIZES.SMALL ? '8px 16px' : '13px 20px'};
  position: relative;
  margin: 0;
  background: transparent;

  ${(props) =>
    props.variant === VARIANTS.CONTAINED &&
    css`
      background-color: ${theme.primary};
      color: ${theme.textOnPrimary};
      &:hover {
        background-color: ${theme.primaryHover};
      }
    `}

  ${(props) =>
    props.variant === VARIANTS.OUTLINED &&
    css`
      color: ${theme.primary};
      border: 1px solid ${theme.primary};
      &:hover {
        background-color: ${theme.primaryLight};
      }
    `}

  ${(props) =>
    props.variant === VARIANTS.TEXT &&
    css`
      color: ${theme.primary};
      &:hover {
        background-color: ${theme.primaryLight};
      }
    `}

  ${(props) =>
    props.variant === VARIANTS.LINK &&
    css`
      color: ${theme.primary};
      &:hover {
        background-color: ${theme.primaryLight};
      }
    `}

  ${(props) =>
    props.icon &&
    css`
      display: flex;
      gap: 10px;
      justify-content: center;
      img {
        width: 1rem;
        height: 1rem;
        vertical-align: middle;
      }
    `}
`;

const ButtonLink = StyledButton.withComponent('a');

export const Button = (props) => {
  const { label, ...rest } = props;

  if (props.icon) {
    return (
      <StyledButton {...rest}>
        <img src={props.icon} alt={props.label} />
        {label}
      </StyledButton>
    );
  }

  let SelectedButton = StyledButton;
  if (props.href) {
    SelectedButton = ButtonLink;
  }

  return <SelectedButton {...rest}>{label}</SelectedButton>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text', 'link']),
  size: PropTypes.oneOf(['small', 'medium']),
  href: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  size: 'medium',
  variant: 'contained',
};
