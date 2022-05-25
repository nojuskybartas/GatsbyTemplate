import React, { StrictMode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { theme } from "styles/theme";
import { Provider } from "react-redux";
import { store } from "state/store";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0
}
body {
    overflow: hidden auto;
    background: rgb(127, 156, 188);
    background: linear-gradient(
      180deg,
      rgba(127, 156, 188, 1) 7%,
      rgba(230, 184, 220, 1) 51%,
      rgba(254, 213, 217, 1) 100%
    );
}
html {
    font-family: ${theme.fontFamily.primary};
}
a {
    all: unset;
}

`;

export const wrapRootElement = ({ element }: any) => (
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
