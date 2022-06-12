import Question from "./components/Question";
import Answer from "./components/Answer";

export const steps = (name, path) => [
  {
    id: "0",
    message: `Hello ${name}! How can I help you?`,
    trigger: "1",
  },
  {
    id: "1",
    waitAction: true,
    component: <Question path={path} />,
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
