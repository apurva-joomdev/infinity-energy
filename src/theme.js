// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50",
    },
    secondary: {
      main: "#ffffff",
    },
    
  },
  typography: {
    fontFamily: "Roboto, sans-serif", 
    h1: {
      fontWeight: 700,
    },
  },
});

export default theme;