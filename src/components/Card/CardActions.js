import styled from '@emotion/styled';

export const StyledCardActions = styled.div`
  padding: 0.4rem;

  button {
    padding: 10px 14px;
  }
`;

export const CardActions = (props) => {
  return <StyledCardActions>{props.children}</StyledCardActions>;
};
