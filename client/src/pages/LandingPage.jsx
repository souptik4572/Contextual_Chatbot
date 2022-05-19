import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { ArrowForward } from "@mui/icons-material";
import TabBar from "../components/TabBar";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Appbar />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          GROWW
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Trusted by millions of Indians. Start investing today.
        </Typography>
      </Container>
      {/* TabBar */}
      <TabBar />
      {/* Products Page Link */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          mt: 2,
        }}
      >
        <Link href="/products" underline="hover">
          View all Products <ArrowForward size="small" />
        </Link>
      </Typography>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
};

export default LandingPage;
