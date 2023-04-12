import styled, { css } from "styled-components";

export const Container = styled.div<{ isWordCheck: boolean }>`
  ${({ theme, isWordCheck }) => css`
    ${theme.flex.row()};
    gap: 0.4rem;

    svg {
      width: 2.6rem;
      height: 2.6rem;
      color: ${isWordCheck ? theme.colors.blue : theme.colors.red};
    }
  `};
`;

export const Input = styled.input<{ isWordCheck: boolean }>`
  ${({ theme, isWordCheck }) => css`
    width: 100%;
    padding: 1rem 0 1rem 1.2rem;
    border: 1px solid ${theme.colors.sub};
    border-radius: ${theme.radius.small};
    ${theme.typo.heavy18};

    color: ${isWordCheck ? theme.colors.blue : theme.colors.red};

    ::placeholder {
      ${theme.typo.bold16};
      color: ${theme.colors.gray200};
    }
  `}
`;
