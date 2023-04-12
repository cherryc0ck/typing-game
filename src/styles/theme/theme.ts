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

export const purpleTheme = {
  name: "purple",
  flex,
  radius,
  colors: {
    main: colors.purple,
    sub: colors.whitePurple,
    ...colors,
  },
  typo,
};

export const mintTheme = {
  name: "mint",
  flex,
  radius,
  colors: {
    main: colors.mint,
    sub: colors.blueMint,
    ...colors,
  },
  typo,
};

export const peachTheme = {
  name: "peach",
  flex,
  radius,
  colors: {
    main: colors.peach,
    sub: colors.whitePeach,
    ...colors,
  },
  typo,
};

export const vanillaTheme = {
  name: "vanilla",
  flex,
  radius,
  colors: {
    main: colors.vanilla,
    sub: colors.blueOrange,
    ...colors,
  },
  typo,
};

export const lightTheme = {
  name: "light",
  flex,
  radius,
  colors: {
    main: colors.white,
    sub: colors.black,
    ...colors,
  },
  typo,
};

export const greenTheme = {
  name: "green",
  flex,
  radius,
  colors: {
    main: colors.green,
    sub: colors.white,
    ...colors,
  },
  typo,
};

// #0066ff
