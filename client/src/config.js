export const name = "Rishabh";

// API Reference: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation
export const steps = [
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
