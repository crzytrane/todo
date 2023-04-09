import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: white;
  filter: drop-shadow(2px 4px 2px rgb(0 0 0 / 25%));
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 1rem auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    border-radius: 4px;
  }
`;
export const StyledDoneMessage = styled.div`
  color: #5c5c5c;
  padding: 0.5rem;
`;
export const StyledHeader = styled.h3`
  margin: auto;
  font-weight: bold;
  color: var(--majorelle-blue);
  filter: brightness(0.5);
`;
