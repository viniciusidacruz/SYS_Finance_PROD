import { useMemo, useState, useCallback, createContext } from "react";

import DARK from "styles/themes/dark";
import LIGHT from "styles/themes/light";

import * as Type from "./types";

export const DarkModeContext = createContext({} as Type.ContextProps);

export const DarkModeProvider = ({ children }: Type.ProviderProps) => {
  const [theme, setTheme] = useState(LIGHT);

  const handleChangeMode = useCallback(() => {
    setTheme(theme.TITLE === "LIGHT" ? DARK : LIGHT);
  }, [theme]);

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
