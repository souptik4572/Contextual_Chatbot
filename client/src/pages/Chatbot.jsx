import ChatBot from "react-simple-chatbot";
import { steps } from "../config";

const Chatbot = () => {
  return (
    <ChatBot
      floating
      steps={steps}
      botDelay={100}
      userDelay={10}
      width="30em"
      headerTitle="Groww ChatBot"
    />
  );
};

export default Chatbot;
