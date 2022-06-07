import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const orderId = "axis";

const ListProductsPage = ({ path }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <NavBar page="items" />
      <Container disableGutters maxWidth="lg" component="main" sx={{ pb: 6 }}>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={4}
          justifyContent="start"
          alignItems="start"
        >
          <Grid item xs={8}>
            <ListItem
              alignItems="flex-start"
              divider
              disableGutters
              secondaryAction={
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  12.56% 1Y returns
                </Typography>
              }
            >
              <ListItemButton onClick={() => navigate(`/${path}/${orderId}`)}>
                <ListItemAvatar>
                  <Avatar>Axis </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Axis Small Cap Mutual Fund"
                  secondary="Medium Risk"
                />
              </ListItemButton>
            </ListItem>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ListProductsPage;
