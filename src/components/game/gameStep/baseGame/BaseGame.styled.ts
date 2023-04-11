import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.col("space-around")};
    width: 100%;
    height: 35rem;
    margin-bottom: 3rem;
    border: 1.2rem solid ${theme.colors.sub};
    border-radius: ${theme.radius.basic};
    background-color: ${theme.colors.main};
  `}
`;

export const Word = styled.p`
  ${({ theme }) => css`
    ${theme.typo.heavy32};
    color: ${theme.colors.sub};
  `};
`;

export const Form = styled.form`
  width: 50%;
`;
