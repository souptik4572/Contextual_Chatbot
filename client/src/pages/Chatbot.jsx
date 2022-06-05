import ChatBot from 'react-simple-chatbot';
import { steps } from '../config';
import { useSelector } from 'react-redux';

const Chatbot = () => {
  let { name } = useSelector((state) => state.user);
  if (!name) name = "there";
  return (
    <ChatBot
      floating
      steps={steps(name)}
      botDelay={100}
      userDelay={10}
      width="30em"
      headerTitle="Groww ChatBot"
    />
  );
};

export default Chatbot;
