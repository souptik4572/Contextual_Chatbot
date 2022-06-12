import ChatBot from 'react-simple-chatbot';
import { steps } from '../config';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Chatbot = () => {
  let { name } = useSelector((state) => state.user);
  if (!name) name = "there";
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <ChatBot
      floating
      steps={steps(location.pathname)}
      botDelay={100}
      userDelay={10}
      width="30em"
      headerTitle="Groww ChatBot"
      // headerTitle={location.pathname}
    />
  );
};

export default Chatbot;
