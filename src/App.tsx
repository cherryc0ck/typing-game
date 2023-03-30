import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1 style={{ display: "none" }}>테스트고정</h1>
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
