import { ThemeProvider as ThemeProvider2 } from "styled-components";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import OrdersPage from "./pages/OrdersPage";
import Order from "./pages/Order";
import ListProductsPage from "./pages/ListProductsPage.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route path="" element={<LandingPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="stocks">
              <Route path="" element={<Stocks />} />
              <Route
                path="filter"
                element={<ListProductsPage path="stocks" />}
              />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="mutual-funds">
              <Route path="" element={<MutualFunds />} />
              <Route
                path="filter"
                element={<ListProductsPage path="mutual-funds" />}
              />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="fixed-deposit">
              <Route path="" element={<FixedDeposits />} />
              <Route
                path="filter"
                element={<ListProductsPage path="fixed-deposit" />}
              />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="us-stocks">
              <Route path="" element={<USStocks />} />
              <Route
                path="filter"
                element={<ListProductsPage path="us-stocks" />}
              />
              <Route path=":productId" element={<Product />} />
            </Route>
          </Route>
          <Route path="/user/order" element={<LayoutPage />}>
            <Route path="" element={<Navigate to="stocks" replace />} />
            <Route path="stocks" element={<OrdersPage />} />
            <Route path="mutual-funds" element={<OrdersPage />} />
            <Route path="deposits" element={<OrdersPage />} />
            <Route path="us-stocks" element={<OrdersPage />} />
            <Route path=":category/:orderId" element={<Order />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <ThemeProvider2 theme={theme}>
        <Chatbot />
      </ThemeProvider2>
    </ThemeProvider>
  );
}

export default App;
