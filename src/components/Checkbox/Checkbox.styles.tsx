import styled from "styled-components";

export const CheckboxOuter = styled.div<{ size: Size }>`
  min-width: ${(props) => props.size};
  max-width: ${(props) => props.size};
  min-height: ${(props) => props.size};
  max-height: ${(props) => props.size};
  background-color: #e7e7e7;
  border: #c3c2c2 solid 1px;
  filter: drop-shadow(2px 2px 1px #e7e7e7);
  border-radius: ${(props) => props.size};
`;

export const Tick = styled.div<{ size: Size }>`
  &:before {
    width: calc(${(props) => props.size} * 0.4);
    height: calc(${(props) => props.size} * 0.65);
    margin: calc(${(props) => props.size} * 0.11)
      calc(${(props) => props.size} * 0.28);
    content: "";
    background-color: #00000058;
    display: block;
    rotate: 45deg;
  }
  &:after {
    width: calc(${(props) => props.size} * 0.26);
    height: calc(${(props) => props.size} * 0.45);
    margin-top: calc(-${(props) => props.size} * 0.85);
    margin-left: calc(${(props) => props.size} * 0.34);
    content: "";
    background-color: #e7e7e7;
    display: block;
    rotate: 45deg;
  }
`;
