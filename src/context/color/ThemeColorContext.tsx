import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { ThemeColor } from "@/types/theme";

type ThemeColorContextValues = {
  themeColor: ThemeColor;
  changeThemeColor: (theme: ThemeColor) => void;
};

export const ThemeColorContext = createContext({} as ThemeColorContextValues);

export const ThemeColorProvider = ({ children }: PropsWithChildren) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>("pink");

  const changeThemeColor = useCallback((theme: ThemeColor) => {
    setThemeColor(theme);
    localStorage.theme = theme;
  }, []);

  const contextValue = useMemo(
    () => ({
      themeColor,
      changeThemeColor,
    }),
    [themeColor, changeThemeColor]
  );

  useEffect(() => {
    localStorage.theme && setThemeColor(localStorage.theme);
  }, []);

  return (
    <ThemeColorContext.Provider value={contextValue}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColor = () => useContext(ThemeColorContext);
