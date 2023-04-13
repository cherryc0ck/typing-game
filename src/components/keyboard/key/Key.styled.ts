import styled, { css } from "styled-components";

export const EffectStyle = (isEffect: boolean) => css`
  ${({ theme }) => css`
    background-color: ${isEffect ? theme.colors.main : "#f1f1ef"};
    box-shadow: ${isEffect
      ? `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 3px rgba(0, 0, 0, 0.45), inset 0px 3px 0px ${theme.colors.main}`
      : `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 3px rgba(0, 0, 0, 0.45), inset 0px 3px 0px ${theme.colors.sub}`};
    span {
      color: ${isEffect && theme.colors.sub};
    }
  `}
`;

export const DefaultStyle = css`
  ${({ theme }) => css`
    height: 4.8rem;
    padding: 0.4rem 0.8rem;
    border-radius: ${theme.radius.small};

    span {
      color: ${theme.colors.gray400};
      ${theme.typo.regular12};
    }
  `}
`;

export const DefaultWidth = css`
  width: 4.8rem;
`;

export const ShiftKeyStyle = css`
  justify-content: flex-end;
  align-items: flex-start;
  width: 12rem;
`;

export const CapsLockKeyStyle = css`
  justify-content: flex-end;
  align-items: flex-start;
  width: 9.6rem;
`;

export const EnterKeyStyle = css`
  justify-content: flex-end;
  align-items: flex-end;
  width: 9rem;
`;

export const TabKeyStyle = css`
  justify-content: flex-end;
  align-items: flex-start;
  width: 8.4rem;
`;

export const BackspaceKeyStyle = css`
  justify-content: flex-end;
  align-items: flex-end;
  width: 8.4rem;
`;

export const AlphabetKey = styled.li<{ isEffect: boolean }>`
  ${({ theme, isEffect }) => css`
    ${theme.flex.col()};
    ${DefaultStyle};
    ${DefaultWidth}
    ${EffectStyle(isEffect)};
    font-family: "lato";
  `};
`;

export const SpecialKey = styled.li<{ isEffect: boolean }>`
  ${({ theme, isEffect }) => css`
    ${theme.flex.col("space-between")};
    ${DefaultStyle};
    ${DefaultWidth}
    ${EffectStyle(isEffect)};
  `}
`;

export const FuncKey = styled.li<{ isEffect: boolean; code: string }>`
  ${({ isEffect, code }) => css`
    display: flex;
    flex-direction: column;
    ${code === "LeftShift" && ShiftKeyStyle};
    ${code === "RightShift" && ShiftKeyStyle};
    ${code === "CapsLock" && CapsLockKeyStyle};
    ${code === "Enter" && EnterKeyStyle};
    ${code === "Tab" && TabKeyStyle};
    ${code === "Backspace" && BackspaceKeyStyle};
    ${DefaultStyle};
    ${EffectStyle(isEffect)};
  `}
`;
