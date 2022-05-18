import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Chatbot from "./pages/Chatbot";

let theme = createTheme({
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
          backgroundColor: theme.palette.primary,
          color: theme.palette.secondary,
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

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <ThemeProvider theme={theme}>
      <LandingPage />
      <Chatbot />
    </ThemeProvider>
  );
}

export default App;
