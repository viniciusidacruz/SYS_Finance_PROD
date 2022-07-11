import { useContext } from "react";

import { DarkModeContext } from "contexts/DarkMode";

function useDarkMode() {
  return useContext(DarkModeContext);
}

export default useDarkMode;
