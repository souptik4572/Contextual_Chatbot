import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Copyright from "../components/Copyright";
import { DialogAuth } from "react-mui-auth-page";

const tiers = [
  {
    title: "Stocks",
    description: [
      "You don’t have to pay a single rupee for opening a stocks account or account maintenance.",
    ],
    link: "/stocks",
  },
  {
    title: "Mutual Funds",
    description: [
      "Select from 5000+ direct mutual funds and get higher return than regular funds.",
    ],
    link: "/mutual-funds",
  },
  {
    title: "US Stocks",
    description: [
      "Invest in Apple, Google, Netflix and many more US companies that you love without any brokerage fee.",
    ],
    link: "/us-stocks",
  },
  {
    title: "Fixed Deposits",
    description: [
      "Open fixed deposits in any bank with higher interest rates without opening a bank account.",
    ],
    link: "/fixed-deposits",
  },
];

const footers = [
  {
    title: "Groww",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

const LandingPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
  };
  const handleSignUp = async ({ email, name, password }) => {
    setTimeout(() => {
      console.log("HELLO");
    }, 2000);
  };
  const handleForget = ({ email }) => {
    console.log({ email });
  };

  const handleSocial = {
    Google: () => {},
    Github: () => {},
    Twitter: () => {},
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            GROWW
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button
            onClick={handleClickOpen}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login/Register
          </Button>
        </Toolbar>
      </AppBar>
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
      {/* End hero unit */}
      {/* Login Dialog */}
      <DialogAuth
        open={open}
        textFieldVariant="outlined"
        onClose={handleClose}
        handleSignUp={handleSignUp}
        handleForget={handleForget}
        handleSignIn={handleSignIn}
        handleSocial={handleSocial}
      />
      {/* End Login Dialog */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={4} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={6}
              // md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
};

export default LandingPage;
