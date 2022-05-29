import { ThemeProvider as ThemeProvider2 } from "styled-components";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import Stocks from "./pages/Stocks";
import MutualFunds from "./pages/MutualFunds";
import FixedDeposits from "./pages/FixedDeposits";
import USStocks from "./pages/USStocks";
import Chatbot from "./pages/Chatbot";
import { theme } from "./theme";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/fixed-deposit" element={<FixedDeposits />} />
          <Route path="/us-stocks" element={<USStocks />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
      <ThemeProvider2 theme={theme}>
        <Chatbot />
      </ThemeProvider2>
    </ThemeProvider>
  );
}

export default App;
