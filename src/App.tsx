import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import type { ThemeColor } from "./types/theme";
import { useThemeColor } from "./context/color/ThemeColorContext";
import Header from "@/components/header/Header";
import { GlobalStyle } from "@/styles/globalStyles";
import { pinkTheme, darkTheme } from "@/styles/theme/theme";

function App() {
  const { themeColor } = useThemeColor();
  const chooseTheme = (themeColor: ThemeColor) => {
    switch (themeColor) {
      case "dark":
        return darkTheme;
      default:
        return pinkTheme;
    }
  };

  return (
    <ThemeProvider theme={chooseTheme(themeColor)}>
      <GlobalStyle theme={chooseTheme(themeColor)} />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
