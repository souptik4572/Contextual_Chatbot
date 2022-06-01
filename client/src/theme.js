import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(165, 100%, 41%)",
      light: "hsl(165, 100%, 51%)",
      dark: "hsl(165, 100%, 21%)",
    },
    secondary: {
      main: "#fff",
      light: "",
      dark: "",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(165, 100%, 41%)",
          color: "#000",
        },
      },
    },
  },

  // chatbot
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "hsl(165, 100%, 41%)",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "hsl(165, 100%, 41%)",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "hsla(10, 10%, 10%, 1)",
});
