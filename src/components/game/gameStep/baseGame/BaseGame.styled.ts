import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.col("space-around")};
    width: 100%;
    height: 35rem;
    margin-bottom: 3rem;
    border: 1.2rem solid #fff;
    border-radius: ${theme.radius.basic};
    background-color: ${theme.colors.pink};
  `}
`;

export const Word = styled.p`
  ${({ theme }) => css`
    ${theme.typo.heavy32};
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 50%;
    input {
      width: 100%;
      padding: 1rem 0 1rem 1.2rem;
      border-radius: ${theme.radius.small};
      ${theme.typo.regular14};

      ::placeholder {
        color: ${theme.colors.gray500};
      }
    }
  `};
`;
