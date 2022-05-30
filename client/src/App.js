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
import LayoutPage from "./pages/LayoutPage";
import Product from "./pages/Product";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route path="" element={<LandingPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="stocks">
              <Route path="" element={<Stocks />} />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="mutual-funds">
              <Route path="" element={<MutualFunds />} />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="fixed-deposit">
              <Route path="" element={<FixedDeposits />} />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="us-stocks">
              <Route path="" element={<USStocks />} />
              <Route path=":productId" element={<Product />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ThemeProvider2 theme={theme}>
        <Chatbot />
      </ThemeProvider2>
    </ThemeProvider>
  );
}

export default App;
