/** @jsxImportSource @emotion/react */
// /** @jsxRuntime classic */
// /** @jsx jsx */

import { Container, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { css, jsx } from "@emotion/react";

const styles = {
  active: {
    textDecoration: "underline",
    color: "text.primary",
    fontSize: "20px",
    marginLeft: 20,
    borderBottom: "2px solid hsl(165, 100%, 41%)",
  },
  inactive: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: 20,
  },
};

export default function NavBar({ page = "explore" }) {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ pt: 4, pb: 6 }}
      disableGutters
    >
      <NavLink
        replace
        to={
          page === "orders"
            ? "/user/order/stocks"
            : page === "items"
            ? "/stocks/filter"
            : "/stocks/user/explore"
        }
        css={({ isActive }) =>
          isActive ? css(styles.active) : css(styles.inactive)
        }
      >
        Stocks
      </NavLink>

      <NavLink
        replace
        to={
          page === "orders"
            ? "/user/order/mutual-funds"
            : page === "items"
            ? "/mutual-funds/filter"
            : "/mutual-funds/user/explore"
        }
        css={({ isActive }) =>
          isActive ? css(styles.active) : css(styles.inactive)
        }
      >
        Mutual Funds
      </NavLink>

      <NavLink
        replace
        to={
          page === "orders"
            ? "/user/order/us-stocks"
            : page === "items"
            ? "/us-stocks/filter"
            : "/us-stocks/user/explore"
        }
        css={({ isActive }) =>
          isActive ? css(styles.active) : css(styles.inactive)
        }
      >
        US Stocks
      </NavLink>

      <NavLink
        replace
        to={
          page === "orders"
            ? "/user/order/fixed-deposits"
            : page === "items"
            ? "/fixed-deposit/filter"
            : "/fixed-deposit/user/explore"
        }
        css={({ isActive }) =>
          isActive ? css(styles.active) : css(styles.inactive)
        }
      >
        Fixed Deposits
      </NavLink>
      <Divider />
    </Container>
  );
}
