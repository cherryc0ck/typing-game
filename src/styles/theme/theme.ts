import { flex } from "./flex";
import { radius } from "./radius";
import { colors } from "./colors";
import { typo } from "./typo";

export const pinkTheme = {
  name: "pink",
  flex,
  radius,
  colors: {
    main: colors.pink,
    sub: colors.white,
    ...colors,
  },
  typo,
};

export const darkTheme = {
  name: "dark",
  flex,
  radius,
  colors: {
    main: colors.black,
    sub: colors.gray800,
    ...colors,
  },
  typo,
};
