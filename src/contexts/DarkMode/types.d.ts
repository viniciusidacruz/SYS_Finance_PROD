import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

interface ContextProps {
  theme: DefaultTheme;
  handleChangeMode: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export { ContextProps, ProviderProps };
