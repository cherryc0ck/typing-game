import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/globalStyles";
import { theme } from "@/styles/theme/theme";
import Header from "@/components/header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
