import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MutualFunds = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Grid
          container
          rowSpacing={4}
          columnSpacing={4}
          justifyContent="center"
          alignItems="center"
          // maxWidth="lg"
        >
          <Grid item xs={6}>
            <Typography
              component="h1"
              variant="h2"
              // align="center"
              color="text.primary"
              gutterBottom
            >
              Mutual Funds
            </Typography>
            <Typography
              variant="h5"
              // align="center"
              color="text.secondary"
              component="p"
            >
              We started with mutual funds with a vision to make it so simple
              that anyone will be able to invest. And, we did!
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia component="img" image="/stocks.png" alt="image" />
          </Grid>
          <Button
            onClick={() => navigate("filter")}
            variant="contained"
            sx={{ my: 1, mx: 1.5 }}
          >
            Explore all Mutual Funds
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MutualFunds;
