import { css } from "styled-components";

export const flex = {
  row: (just = "center", align = "center") => css`
    display: flex;
    justify-content: ${just};
    align-items: ${align};
  `,
  col: (just = "center", align = "center") => css`
    display: flex;
    flex-direction: column;
    justify-content: ${just};
    align-items: ${align};
  `,
};
