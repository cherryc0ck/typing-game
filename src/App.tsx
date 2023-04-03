import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "components/header/Header";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
