import React from 'react';
import styled from '@emotion/styled';

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1rem 1rem 0.2rem 1rem;
  max-width: inherit;
  overflow-wrap: break-word;
`;

export const CardContent = (props) => {
  return <StyledCardContent>{props.children}</StyledCardContent>;
};
