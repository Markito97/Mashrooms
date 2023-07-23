import "./App.css";
import Routing from "./routing/routing";
import "../node_modules/highlight.js/styles/atom-one-dark-reasonable.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { colorTokens, getDesignTokens } from "./theme";
import { useEffect, useMemo, useState } from "react";
import { useHandleSessionQuery } from "./redux/features/auth/auth";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const { data } = useHandleSessionQuery();

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    mode === "light"
      ? (document.body.style.background = "#f7f4f4e2")
      : (document.body.style.background = "#191c21");
  }, [mode]);

  const theme = useMemo(() => {
    const design = getDesignTokens(mode);

    const currentTheme = createTheme(design);

    const colors = colorTokens(currentTheme.palette.mode);

    currentTheme.components!.MuiButton = {
      styleOverrides: {
        root: {
          color: "#FFF",
          "&:hover": {
            backgroundColor: colors.third[100],
            "@media (hover: none)": {
              backgroundColor: "none",
            },
          },
        },
      },
    };

    return currentTheme;
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
