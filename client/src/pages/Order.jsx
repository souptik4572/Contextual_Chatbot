import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const Order = () => {
  const { orderId } = useParams();

  return (
    <React.Fragment>
      <Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
          }}
        >
          <Link to={-1}>Back</Link>
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              Axis Small Cap Mutual Fund
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Rs. 19,999
            </Typography>
            <Divider />
            <Typography variant="body2">
              Order Id: {orderId}
              <br />
              placed on
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              14 Jan 2022, 3:52 pm
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Repeat Order</Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Order;
