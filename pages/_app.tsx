import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";

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
