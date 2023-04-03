import React from "react";
import styled, { css } from "styled-components";
import { KeyProps } from "../Keyboard";

const Key = ({ main, ko, sub, size, pos, effect }: KeyProps) => {
  return (
    <StyledKey size={size} sub={sub} pos={pos} $effect={effect}>
      <span>{main}</span>
      <span>{sub}</span>
    </StyledKey>
  );
};

const StyledKey = styled.li<{
  size?: string;
  sub?: string;
  pos?: string;
  $effect?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.pos ? (props.pos === "start" ? "flex-start" : "flex-end") : "center"};
  justify-content: ${(props) =>
    props.pos ? "flex-end" : props.sub ? "space-between" : "center"};
  width: ${(props) => props.size || "4.8rem"};
  height: 4.8rem;
  padding: 0.4rem 0.8rem;
  background-color: ${(props) => (props.$effect ? "black" : "#f1f1ef")};
  box-shadow: ${(props) =>
    props.$effect
      ? "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 3px rgba(0, 0, 0, 0.45), inset 0px 3px 0px ##141414"
      : "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 3px rgba(0, 0, 0, 0.45), inset 0px 3px 0px #ffffff"};
  border-radius: 8px;

  span {
    ${({ theme }) => css`
      color: ${theme.colors.gray400};
      /* font-family: "lato"; */
      ${theme.typo.regular12};
    `}
  }
`;

export default Key;
