import styled from "styled-components";

export const StyledNewTodoContainer = styled.div`
  filter: drop-shadow(2px 4px 2px rgb(0 0 0 / 25%));
  margin: 0 auto;
  background-color: var(--majorelle-blue);
  padding: 1rem;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    border-radius: 0 0 4px 4px;
  }
`;

export const StyledHeader = styled.h2`
  flex-basis: 100%;
  text-align: center;
  color: var(--text-light);
  margin-bottom: 1rem;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  @media screen and (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 4px;
  border: 0;
  width: 100%;
`;

export const StyledButton = styled.button`
  border-radius: 4px;
  border: var(--purpureus) solid 2px;
  background-color: var(--purpureus);
  color: var(--text-light);
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.6);
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 2rem;
  }
`;
