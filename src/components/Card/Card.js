import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';
import { bodyStyles } from '../../shared';

const StyledCard = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  max-width: ${(props) => props.maxWidth}px;
  max-height: ${(props) => props.maxHeight}px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Card = (props) => {
  return (
    <>
      <Global styles={bodyStyles} />
      <StyledCard {...props}>{props.children}</StyledCard>
    </>
  );
};

Card.defaultProps = {
  maxWidth: 345,
  direction: 'column',
};

Card.propTypes = {
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column']),
};
