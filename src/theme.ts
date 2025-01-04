import { createTheme, responsiveFontSizes } from "@mui/material";
import '@fontsource/roboto';


let theme = createTheme({
    palette: {
      primary: {
        main: '#333333',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
    typography: {
        fontFamily: "Roboto"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;