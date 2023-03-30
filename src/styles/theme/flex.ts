import { css } from "styled-components";

export const flex = {
  flexColCenter: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexRowCenter: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexRowBetween: () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
