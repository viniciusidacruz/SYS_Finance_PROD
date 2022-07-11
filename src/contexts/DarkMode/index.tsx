import { useState, useCallback, useMemo, createContext } from "react";

import DARK from "styles/themes/dark";
import LIGHT from "styles/themes/light";

import { ContextProps, ProviderProps } from "./types";

export const DarkModeContext = createContext({} as ContextProps);

export const DarkModeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState(LIGHT);

  const handleChangeMode = useCallback(() => {
    setTheme(theme.TITLE === "LIGHT" ? DARK : LIGHT);
  }, [theme.TITLE]);

  const value = useMemo(
    () => ({
      theme,
      handleChangeMode,
    }),
    [handleChangeMode, theme]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
