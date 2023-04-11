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
    background-color: ${theme.colors.margin};

    p {
      color: ${theme.colors.sub};
      ${theme.typo.heavy32};
    }
  `}
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
