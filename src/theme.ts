import { createContext } from "react";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    smallMobile: true; // adds the `mobile` breakpoint
    averageMobile: true;
    tablet: true;
    largeTablet: true;
    laptop: true;
    desktop: true;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const colorTokens = (mode: string) => ({
  ...(mode === "light"
    ? {
        primary: {
          100: "#FFFFFF",
        },
        secondary: {
          100: "#f7f4f4e2",
        },
        third: {
          100: "#346a4c",
        },
        text: {
          100: "#000",
        },
      }
    : {
        primary: {
          100: "#16181d",
        },
        secondary: {
          100: "#191c22",
        },
        third: {
          100: "#1593bc",
        },
        text: {
          100: "white",
        },
      }),
});

export const getDesignTokens = (mode: string) => {
  const colors = colorTokens(mode);
  return {
    components: {},
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[100],
            },
            type: "light",
            text: {
              primary: "#000000",
            },
            success: {
              main: colors.third[100],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[100],
            },
            text: {
              primary: "#FFFFFF",
            },
            success: {
              main: colors.third[100],
            },
          }),
    },
    breakpoints: {
      values: {
        smallMobile: 0,
        averageMobile: 575,
        tablet: 768,
        largeTablet: 868,
        laptop: 1024,
        desktop: 1200,
      },
    },
    typography: {
      fontFamily: ["Ubuntu"].join(","),
    },
  };
};
