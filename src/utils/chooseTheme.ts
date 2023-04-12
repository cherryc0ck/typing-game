import { ThemeColor } from "@/types/theme";

import {
  pinkTheme,
  darkTheme,
  purpleTheme,
  mintTheme,
  peachTheme,
  vanillaTheme,
  lightTheme,
  greenTheme,
} from "@/styles/theme/theme";

export const chooseTheme = (themeColor: ThemeColor) => {
  switch (themeColor) {
    case "dark":
      return darkTheme;

    case "purple":
      return purpleTheme;

    case "mint":
      return mintTheme;

    case "peach":
      return peachTheme;

    case "vanilla":
      return vanillaTheme;

    case "light":
      return lightTheme;

    case "green":
      return greenTheme;

    default:
      return pinkTheme;
  }
};
