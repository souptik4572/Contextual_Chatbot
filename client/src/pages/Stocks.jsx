import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, CardMedia, Grid } from "@mui/material";

const Stocks = () => {
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
              Stocks
            </Typography>
            <Typography
              variant="h5"
              // align="center"
              color="text.secondary"
              component="p"
            >
              We make owning a piece of your favourite Indian Companies, a piece
              of cake.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              image="/stocks.png"
              alt="image"
              // sx={{
              //   height: "60%",
              //   width: "60%",
              // }}
            />
          </Grid>
          <Button onClick={null} variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Explore all stocks in India
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Stocks;
