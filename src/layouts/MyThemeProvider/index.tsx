import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import useDarkMode from "hooks/useDarkMode";

interface ContentProps {
  children: ReactNode;
}

export const MyThemeProvider = ({ children }: ContentProps) => {
  const { theme } = useDarkMode();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
