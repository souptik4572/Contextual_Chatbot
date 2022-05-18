import ChatBot from "react-simple-chatbot";
import Fab from "@mui/material/Fab";
import { Chat, Close } from "@mui/icons-material";
import * as React from "react";
import { Box } from "@mui/material";

const name = "Rishabh";

const steps = [
  {
    id: "0",
    message: `Hello ${name}! How can I help you?`,
    trigger: "1",
  },
  {
    id: "1",
    options: [
      { value: 1, label: "question 1", trigger: "2" },
      { value: 2, label: "question 2", trigger: "2" },
      { value: 3, label: "question 3", trigger: "2" },
    ],
  },
  {
    id: "2",
    message: "Bye!",
    end: true,
  },
];

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
