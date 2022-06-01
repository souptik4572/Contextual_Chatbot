import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

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
    link: "/fixed-deposit",
  },
];

const ProductsPage = (dialogState = false) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
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
          Our Offerings
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Everything from Stocks and Mutual Funds to IPO and FDs. Explore our
          offerings at your one stop investing destination, Groww.
        </Typography>
      </Container>
      {/* Products */}
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
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => {
                      navigate(tier.link);
                    }}
                  >
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ProductsPage;
