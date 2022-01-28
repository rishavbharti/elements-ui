import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledCardHeader = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  max-width: inherit;
`;

export const CardHeader = (props) => {
  const { avatar, TitleComp, title, subtitle } = props;

  return (
    <StyledCardHeader>
      <div>{avatar}</div>
      <div>
        <TitleComp>{title}</TitleComp>
        <p>{subtitle}</p>
      </div>
    </StyledCardHeader>
  );
};

CardHeader.defaultProps = {
  TitleComp: 'h3',
};
CardHeader.propTypes = {
  avatar: PropTypes.object,
  TitleComp: PropTypes.elementType,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
