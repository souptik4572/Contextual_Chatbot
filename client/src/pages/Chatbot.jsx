import ChatBot from 'react-simple-chatbot';
import { steps } from '../config';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Chatbot = () => {
  let { name } = useSelector((state) => state.user);
  if (!name) name = "there";
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(location.pathname);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <ChatBot
      floating
      opened={isOpen}
      toggleFloating={() => setIsOpen(!isOpen)}
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
// API Reference: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation
