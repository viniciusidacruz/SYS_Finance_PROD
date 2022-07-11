import type { AppProps } from "next/app";

import { DarkModeProvider } from "contexts/DarkMode";

import { MyThemeProvider } from "layouts/MyThemeProvider";

import GlobalStyle from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <MyThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </MyThemeProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
