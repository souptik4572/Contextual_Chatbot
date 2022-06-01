import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import { DialogAuth } from "react-mui-auth-page";

const Appbar = () => {
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
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Link href="/">GROWW</Link>
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
    </AppBar>
  );
};

export default Appbar;
