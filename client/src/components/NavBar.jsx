/** @jsxImportSource @emotion/react */
// /** @jsxRuntime classic */
// /** @jsx jsx */

import { Container, Divider } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
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

export default function NavBar() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ pt: 8, pb: 6 }}
      disableGutters
    >
      <NavLink
        to="/user/order/stocks"
        css={({ isActive }) =>
          isActive ? css(styles.active) : css(styles.inactive)
        }
      >
        Stocks
      </NavLink>

      <NavLink
        to="/user/order/mutual-funds"
        css={({ isActive }) =>
          isActive ? css(styles.active) : css(styles.inactive)
        }
      >
        Mutual Funds
      </NavLink>

      <NavLink
        to="/user/order/us-stocks"
        css={({ isActive }) =>
          isActive ? css(styles.active) : css(styles.inactive)
        }
      >
        US Stocks
      </NavLink>

      <NavLink
        to="/user/order/deposits"
        css={({ isActive }) =>
          isActive ? css(styles.active) : css(styles.inactive)
        }
      >
        Fixed Deposits
      </NavLink>
      <Divider />
      <Outlet />
    </Container>
  );
}
