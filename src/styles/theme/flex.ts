import { css } from "styled-components";

export const flex = {
  colCenter: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  rowCenter: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  rowBetween: () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
