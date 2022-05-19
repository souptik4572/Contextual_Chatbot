import ChatBot from "react-simple-chatbot";
import Fab from "@mui/material/Fab";
import { Chat, Close } from "@mui/icons-material";
import * as React from "react";
import { Box } from "@mui/material";
import { steps } from "../config";

const Chatbot = () => {
  const [chatbot, setChatbot] = React.useState(false);
  return (
    <Box
      sx={{
        position: "fixed",
        right: "4%",
        bottom: "8%",
        float: "right",
      }}
    >
      {chatbot ? (
        <>
          <ChatBot steps={steps} />
          <Fab
            color="primary"
            onClick={() => setChatbot(false)}
            sx={{ float: "right" }}
          >
            <Close />
          </Fab>
        </>
      ) : (
        <Fab
          color="primary"
          variant="extended"
          size="large"
          onClick={() => setChatbot(true)}
        >
          <Chat /> &nbsp; Chat
        </Fab>
      )}
    </Box>
  );
};

export default Chatbot;
