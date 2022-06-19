import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography fontSize={30}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TabBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="standard"
      >
        <Tab label="Stocks" />
        <Tab label="Mutual Funds" />
        <Tab label="US Stocks" />
        <Tab label="FDs" />
      </Tabs>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          ZERO Account Charges
        </TabPanel>
        <TabPanel value={value} index={1}>
          0% Commission
        </TabPanel>
        <TabPanel value={value} index={2}>
          Free Account Opening
        </TabPanel>
        <TabPanel value={value} index={3}>
          6.7% Interest Rate
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
}
