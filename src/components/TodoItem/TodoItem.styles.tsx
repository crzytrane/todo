import styled from "styled-components";

export const StyledTodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  &:first-child {
    padding-top: 0.2rem;
  }
  &:not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: #e7e7e7 solid 1px;
  }
  &:last-child {
    padding-bottom: 0.2rem;
  }
`;

export const StyledRemoveButton = styled.button`
  border: 0;
  background: transparent;
  color: grey;
  &:hover {
    color: darkred;
  }
`;

export const StyledText = styled.div<{ completed: boolean }>`
  flex-grow: 1;
  ${(props) => props.completed && "text-decoration: line-through"};
`;
