import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Avatar,
  Button,
  CardMedia,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowForward, Search, Share } from "@mui/icons-material";

const orderId = "101";

const OrdersPage = () => {
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
          alignItems="start"
        >
          <Grid item>
            <Paper variant="outlined">
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{
                    mt: 2,
                  }}
                >
                  Filter
                </Typography>
                <Button
                  onClick={null}
                  variant="contained"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Clear All
                </Button>
              </Stack>
              <TextField
                fullWidth
                hiddenLabel
                variant="filled"
                placeholder="Search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Divider />
              <Stack>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Investment Orders"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Redeem Orders"
                />
              </Stack>

              <Divider />
              <Stack>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Orders in progress"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Successful Orders"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Unsuccessful Orders"
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <ListItem
              secondaryAction={
                <Stack direction="row" spacing={4}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    14 Jan 2022, 3:52 pm
                  </Typography>
                  <ArrowForward />
                </Stack>
              }
              disableGutters
            >
              <ListItemButton onClick={() => navigate(orderId)}>
                <ListItemText
                  primary="Axis Small Cap Mutual Fund"
                  secondary="Rs. 19999"
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem
              secondaryAction={
                <Stack direction="row" spacing={4}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    14 Jan 2022, 3:32 pm
                  </Typography>
                  <ArrowForward />
                </Stack>
              }
              disableGutters
            >
              <ListItemButton onClick={() => navigate(orderId)}>
                <ListItemText primary="Infosys" secondary="Rs. 59999" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default OrdersPage;
