import {
  AppBar,
  Button,
  Link,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import { DialogAuth } from "react-mui-auth-page";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../redux/user/user.actions";
import { stringAvatar } from "../helpers/createAvatar";
import { BusinessCenter, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignIn = ({ email, password }) => {
    dispatch(userLogin(email, password));
    handleClose();
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
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
        {name ? (
          <>
            <IconButton onClick={handleClick} sx={{ ml: 2 }}>
              <Avatar {...stringAvatar(name)} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              onClick={() => setAnchorEl(null)}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{
                horizontal: "right",
                vertical: "top",
              }}
              anchorOrigin={{
                horizontal: "right",
                vertical: "bottom",
              }}
            >
              <MenuItem onClick={() => navigate("/user/order")}>
                <ListItemIcon>
                  <BusinessCenter fontSize="small" />
                </ListItemIcon>
                My Orders
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            onClick={handleClickOpen}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login/Register
          </Button>
        )}
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
