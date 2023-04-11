import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 0 1rem 1.2rem;
    border-radius: ${theme.radius.small};
    ${theme.typo.bold16};

    ::placeholder {
      color: ${theme.colors.gray500};
    }
  `}
`;
