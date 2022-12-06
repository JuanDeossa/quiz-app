import { createMuiTheme } from "@material-ui/core/styles";

export const customMuiTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 900,
      xl: 1200,
    },
  },
});
