import { AppProps } from "next/app";
import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import { store } from "../redux/store";
import { Provider } from "react-redux";

type Props = {};

const theme: DefaultTheme = {
  primary: "#040714",
  secondary: "#0070f3",
  white: "#fff",
  brightBlue: "#3E64E5",
  silver: "silver",
  darkGrey: "#31343e",
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
