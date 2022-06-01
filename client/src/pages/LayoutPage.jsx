import * as React from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <React.Fragment>
      <Appbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default LayoutPage;
