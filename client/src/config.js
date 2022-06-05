import Question from "./components/Question";
import Answer from "./components/Answer";
// API Reference: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation
export const steps = (name) => [
  {
    id: "0",
    message: `Hello ${name}! How can I help you?`,
    trigger: "1",
  },
  {
    id: "1",
    waitAction: true,
    component: <Question />,
    trigger: "2",
    asMessage: true,
  },
  {
    id: "2",
    waitAction: true,
    component: <Answer />,
    trigger: "1",
  },
  {
    id: "3",
    message: "Bye!",
    end: true,
  },
];
